import React, { useMemo, useState } from 'react';
import classNames from "classnames";

import Flex from 'src/commons/layouts/Flex';
import Button from 'src/commons/components/Button';
import Markdown from 'src/features/news/components/Markdown';
import TextArea from "../TextArea";

import styles from './MarkdownTextArea.module.scss';

interface MarkdownTextAreaProps {
  onPostNewsClick: () => void;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

type State = 'write' | 'preview';

const MarkdownTextArea = (props: MarkdownTextAreaProps) => {
  const { onPostNewsClick, onChange: onChangeBase } = props;

  const [text, setText] = useState('');
  const [state, setState] = useState('write' as State);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    onChangeBase(event);
  }

  const mainPart = useMemo(() => {
    if (state === 'write') {
      return (
        <TextArea
          value={text}
          label="Content Here..."
          onChange={onChange}
        />
      );
    } else {
      return (
        <Markdown className={styles.mainPart}>
          {text}
        </Markdown>
      )
    }
  }, [state, text, onChange]);

  return (
    <>
      <div className={styles.editorBar}>
        <button
          onClick={() => setState('write')}
          className={classNames(
            styles.tag,
            state === 'write' && styles.active,
          )}
        >
          Write
        </button>
        <button
          onClick={() => setState('preview')}
          className={classNames(
            styles.tag,
            state === 'preview' && styles.active,
          )}
        >
          Preview
        </button>
        <Flex flex={1} />
        <div className={styles.rightPart}>
          <Button variant="filled" onClick={onPostNewsClick}>
            Post news
          </Button>
        </div>
      </div>
      { mainPart }
    </>
  );
};

export default MarkdownTextArea;