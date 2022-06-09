import { useState } from 'react';

import { url as newsIndexUrl } from 'pages/news/index';

import Nav from 'src/features/misc/components/Nav';
import useTagList from 'src/features/news/apis/useTagList';
import NewsList from 'src/features/news/components/NewsList';

import TagList from './TagList';

import styles from './NewsIndex.module.scss';
import { useRouter } from 'next/router';

interface NewsIndexProps {
  onlyTag: Set<string>;
}

const NewsIndex = (props: NewsIndexProps) => {
  const { onlyTag } = props;

  const tagList = useTagList();
  const router = useRouter();

  return (
    <>
      <Nav />
      <div className={styles.newsIndexWrapper}>
        <div className={styles.newsIndex}>
          <TagList
            tagList={tagList}
            onlyTag={onlyTag}
            onClick={tag => {
              const clonedOnlyTag = new Set(onlyTag);
              if (clonedOnlyTag.has(tag)) {
                clonedOnlyTag.delete(tag);
              } else {
                clonedOnlyTag.add(tag);
              }
              const tagList = JSON.stringify(Array.from(clonedOnlyTag));
              router.push({
                pathname: newsIndexUrl(),
                query: { tagList },
              })
            }}
          />
          <NewsList
            hasBar={false}
            onlyTag={onlyTag}
          />
        </div>
      </div>
    </>
  )
}

export default NewsIndex;