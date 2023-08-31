import React from "react";
import styles from "./FileCard.module.scss";
import { getExtensionFromFileName } from "../../utils/getExtensionFromFileName";
import { isImage } from "../../utils/isImage";
import { getColorByExtension } from "../../utils/getColorByExtension";
import { FileTextOutlined } from "@ant-design/icons";

interface FileCardProps {
  filename: string;
  originalname: string;
}

export const FileCard: React.FC<FileCardProps> = ({
  originalname,
  filename,
}) => {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext)
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/` + filename
      : "";

  const color = getColorByExtension(ext);
  const classColor = styles[color];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={imageUrl} alt="File" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalname}</span>
    </div>
  );
};
