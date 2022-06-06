import React, { useRef, useState } from 'react';

import Button from 'src/commons/components/Button';
import styles from './PictureUploaderInit.module.scss';

interface PictureUploaderInitProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, file: File) => void;
}

const PictureUploaderInit = (props: PictureUploaderInitProps) => {
  const { onChange: onChangeBase } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMsg, setErrorMsg] = useState<null | string>(null);

  const onClick = () => {
    const current = inputRef.current;
    if (current === null) {
      return;
    }
    current.click();
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files === null) return;
    const file = files[0];
    if (file && file.type.split('/')[0] === 'image') {
      setErrorMsg(null);
      onChangeBase(event, file);
    } else if (!file) {
      setErrorMsg('Do not find any files...');
    } else {
      setErrorMsg(`The file ${JSON.stringify(file.name)} is not an image...`);
    }
  }

  return (
    <div className={styles.pictureUploader}>
      <input
        type="file"
        ref={inputRef}
        className={styles.hiddenInput}
        onChange={onChange}
      />
      <div className={styles.mainPart} onClick={onClick}>
        <div className={styles.info}>Upload picture</div>
        <div className={styles.infoHelper}>
          Supports JPG and PNG image
        </div>
        {
          errorMsg
            ? <div className={styles.errorMsg}>{errorMsg}</div>
            : null
        }
      </div>
    </div>
  );
};

export default PictureUploaderInit;