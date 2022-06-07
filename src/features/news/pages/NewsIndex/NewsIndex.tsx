import { useState } from 'react';
import Nav from 'src/features/misc/components/Nav';
import useTagList from 'src/features/news/apis/useTagList';
import NewsList from 'src/features/news/components/NewsList';

import TagList from './TagList';

import styles from './NewsIndex.module.scss';

const NewsIndex = () => {
  const tagList = useTagList()
  const [onlyTag, setOnlyTag] = useState(new Set() as Set<string>);

  return (
    <>
      <Nav />
      <div className={styles.newsIndexWrapper}>
        <div className={styles.newsIndex}>
          <TagList
            tagList={tagList}
            onlyTag={onlyTag}
            onClick={tag => setOnlyTag((onlyTag) => {
              const clonedOnlyTag = new Set(onlyTag);
              if (clonedOnlyTag.has(tag)) {
                clonedOnlyTag.delete(tag);
              } else {
                clonedOnlyTag.add(tag);
              }
              return clonedOnlyTag;
            })}
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