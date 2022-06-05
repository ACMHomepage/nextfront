import React, { useEffect, useMemo, useState } from "react";

import PictureUploaderInit from "./PictureUploaderInit";
import PictureUploaderPreview from "./PictureUploaderPreview";

interface PictureUploaderProps {
  onChange: (picture: File | null) => void;
};

const PictureUploader = (props: PictureUploaderProps) => {
  const { onChange } = props;

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, file: File) => {
    setFile(file);
  }

  const handleBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFile(null);
    onChange(null);
  }

  const result = useMemo(() => {
    if (file === null) {
      return (
        <PictureUploaderInit
          onChange={handleChange}
        />
      );
    } else {
      return (
        <PictureUploaderPreview
          onBack={handleBack}
          file={file}
          onChange={onChange}
        />
      );
    }
  }, [file, handleChange, handleBack]);

  return result;
};

export default PictureUploader;