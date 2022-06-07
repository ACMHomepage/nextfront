import classNames from 'classnames';

import styles from './TagList.module.scss';

interface TagListProps {
  tagList: string[];
  onlyTag: Set<string>;
  onClick: (tag: string) => void;
}

const TagList = (props: TagListProps) => {
  const { tagList, onlyTag, onClick } = props;

  return (
    <div className={styles.newsTagList}>
      {
        tagList.map((tag, index) => {
          const notEnd = index !== tagList.length - 1 && onlyTag.has(tagList[index + 1]);
          const notBegin = index !== 0 && onlyTag.has(tagList[index - 1]);

          return (
            <div
              className={classNames(
                styles.tag,
                onlyTag.has(tag) && styles.st_active,
                notEnd && styles.st_notEnd,
                notBegin && styles.st_notBegin,
              )}
              onClick={() => onClick(tag)}
            >
              {tag}
            </div>
          );
        })
      }
    </div>
  );
};

export default TagList;