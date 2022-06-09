import { useRouter } from 'next/router';
import React from 'react';

import { url as newsIndexUrl } from 'pages/news/index';

import styles from './TagList.module.scss';

interface TagListProps {
  value: string[];
}

const TagList = (props: TagListProps) => {
  const { value } = props;
  const router = useRouter();

  return (
    <>
      {value.map(tag => {
        return (
          <div
            className={styles.tag}
            key={tag}
            onClick={() => router.push({
              pathname: newsIndexUrl(),
              query: { tagList: JSON.stringify([tag]) }
            })}
          >
            <span className={styles.main}>{tag}</span>
          </div>
        );
      })}
    </>
  );
}

export default TagList;