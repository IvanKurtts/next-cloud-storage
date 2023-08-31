import React, { useEffect } from "react";
import { FileItem } from "../api/dto/files.dto";
import { FileActions } from "../components/FileActions";
import { FileList, FileSelectType } from "../components/FileList";
import { Empty } from "antd";

import * as Api from "../api";

interface FilesProps {
  items: FileItem[];
  withActions?: boolean;
}

export const Files: React.FC<FilesProps> = ({ items, withActions }) => {
  const [files, setFiles] = React.useState(items || []);
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
  const [selectedFile, setSelectedFile] = React.useState({});

  const onFileSelect = (id: number, type: FileSelectType) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };

  useEffect(() => {
    const file = files.find((item) => item.id === selectedIds[0]);
    file && setSelectedFile(file);
  }, [selectedIds]);

  return (
    <div>
      {files.length ? (
        <>
          {withActions && (
            <FileActions
              onClickRemove={onClickRemove}
              isActive={selectedIds.length > 0}
              fileSelected={selectedIds.length === 1}
              file={selectedFile as FileItem}
            />
          )}
          <FileList items={files} onFileSelect={onFileSelect} />
        </>
      ) : (
        <Empty className="empty-block" description="Files list is empty" />
      )}
    </div>
  );
};
