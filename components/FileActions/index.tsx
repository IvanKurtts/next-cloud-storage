import React from "react";
import styles from "./FileActions.module.scss";
import { Button, Popconfirm } from "antd";
import { FileItem } from "../../api/dto/files.dto";

interface FileActionsProps {
  onClickRemove: VoidFunction;
  isActive: boolean;
  fileSelected: boolean;
  file: FileItem | null;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  fileSelected,
  isActive,
  file,
}) => {
  return (
    <div className={styles.root}>
      <Popconfirm
        title="Delete file(s)?"
        description="All selected files will be removed into trash"
        okText="Yes"
        cancelText="No"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
      <a
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/` + file?.filename}
        download
        onClick={(e) => e.stopPropagation()}
        target="_blank"
      >
        <Button disabled={!fileSelected} type="primary">
          Download
        </Button>
      </a>
    </div>
  );
};
