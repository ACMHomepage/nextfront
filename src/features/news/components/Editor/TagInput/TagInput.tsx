import React, { useCallback, useState } from 'react';

import Input from '../Input';
import TagList from './TagList';

import styles from './TagInput.module.scss';
import ClickAwayListener from 'react-click-away-listener';

interface TagInputProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string[]) => void;
}

const TagInput = (props: TagInputProps) => {
  const {
    label,
    onChange: onChangeBase = () => null,
  } = props;
  const [tagList, setTagList] = useState(['@hide']);
  const [tag, setTag] = useState('');

  const handleTag = () => {
    setTagList((tagList) => {
      console.log('No1');
      if (tag.trim() !== '' && !tagList.includes(tag)) {
        return [...tagList, tag];
      } else {
        return tagList;
      }
    });
    setTag('');
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value.trim();
    if (value !== '') {
      setTag(value);
    } else {
      setTag('');
    }
    onChangeBase(event, tagList);
  };
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Tab') {
      handleTag();
    } else if (event.key === 'Backspace') {
      if (tag !== '') {
        return;
      }
      const lastTag = tagList.pop();
      if (lastTag) setTag(lastTag);
      event.preventDefault();
    }
  };
  const onClickAway = () => {
    handleTag();
  }
  const onDeleteTag = (_e: React.MouseEvent, tag: string) => {
    console.log(tagList, tag);
    setTagList(tagList => {
      return tagList.filter(value => value !== tag);
    })
  };

  return (
    <div className={styles.tagInput}>
      <TagList
        value={tagList}
        onDeleteTag={onDeleteTag}
      />
      <ClickAwayListener onClickAway={onClickAway}>
        <Input
          label={label}
          value={tag}
          size="sm"
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={styles.input}
        />
      </ClickAwayListener>
    </div>
  )
}

export default TagInput;