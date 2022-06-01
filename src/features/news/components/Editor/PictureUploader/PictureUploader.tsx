import React, { useState } from "react";

import PictureUploaderInit from "./PictureUploaderInit";
import PictureUploaderPreview from "./PictureUploaderPreview";

const PictureUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, file: File) => {
    setFile(file);
  }

  const onBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFile(null);
  }

  return (
    file === null
      ? <PictureUploaderInit onChange={onChange} />
      : <PictureUploaderPreview onBack={onBack} file={file} />
  );
};

export default PictureUploader;