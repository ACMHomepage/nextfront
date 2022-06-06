import { X } from 'lucide-react';
import React, { useEffect } from 'react';

import Icon from 'src/commons/components/Icon';
import styles from './TagList.module.scss';

interface TagListProps {
  value: string[];
}

const TagList = (props: TagListProps) => {
  const { value } = props;

  return (
    <>
      {value.map(tag => {
        return (
          <div className={styles.tag} key={tag}>
            <span className={styles.main}>{tag}</span>
          </div>
        );
      })}
    </>
  );
}

export default TagList;