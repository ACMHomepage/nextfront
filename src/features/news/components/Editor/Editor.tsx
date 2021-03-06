import { useState } from 'react';

import { url as newsUrl } from 'pages/news/[newsId]';

import PictureUploader from './PictureUploader';
import Input from './Input';
import TagInput from './TagInput';
import MarkdownTextArea from './MarkdownTextArea';

import useUploadPicture from 'src/features/news/apis/useUploadPicture';
import usePostNews from 'src/features/news/apis/usePostNews';

import styles from './Editor.module.scss';

const Editor = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [tagList, setTagList] = useState(['@hide']);
  const [content, setContent] = useState('');

  const uploadPicture = useUploadPicture();
  const [postNews, state] = usePostNews();

  const handlePostNewsClick = async () => {
    if (picture === null) return;
    const imageUrl = await uploadPicture(picture);
    postNews(
      { title, imageUrl, content, tagList },
      { url: (news) => newsUrl({ newsId: news.id }) },
    );
  }

  return (
    <div className={styles.editor}>
      <PictureUploader
        onChange={picture => setPicture(picture)}
      />
      <Input
        label="Title Here..."
        size="lg"
        onChange={e => setTitle(e.target.value)}
      />
      <TagInput
        label="Add tag..."
        tagList={tagList}
        onChange={tagList => setTagList(tagList)}
      />
      <MarkdownTextArea
        onPostNewsClick={handlePostNewsClick}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  );
};

export default Editor;