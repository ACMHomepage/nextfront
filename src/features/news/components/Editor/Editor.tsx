import PictureUploader from './PictureUploader';
import Input from './Input';
import TagInput from './TagInput';
import TextArea from './TextArea';

import styles from './Editor.module.scss';

const Editor = () => {
  return (
    <div className={styles.editor}>
      <PictureUploader />
      <Input label="Title Here..." size="lg" />
      <TagInput label="Add tag..."/>
      <hr className={styles.hr}/>
      <TextArea label="Content Here..." />
    </div>
  );
};

export default Editor;