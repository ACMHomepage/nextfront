import { X } from 'lucide-react';
import React, { useEffect } from 'react';

import Icon from 'src/commons/components/Icon';
import styles from './TagList.module.scss';

interface TagListProps {
  value: string[];
  onDeleteTag: (event: React.MouseEvent, tag: string) => void;
}

const TagList = (props: TagListProps) => {
  const { value, onDeleteTag } = props;

  return (
    <>
      {value.map(tag => {
        return (
          <div className={styles.tag} key={tag}>
            <span className={styles.main}>{tag}</span>
            <span
              className={styles.button}
              onClick={(event) => onDeleteTag(event, tag)}
            >
              <Icon from={X} variant="xs"/>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default TagList;