import DOMPurify from 'dompurify';
import { marked } from 'marked';
import classNames from 'classnames';

import styles from './Markdown.module.scss';

interface MarkdownProps {
  children: string;
  className?: string;
}

const Markdown = (props: MarkdownProps) => {
  const { children, className } = props;
  const markdownedDoc = DOMPurify.sanitize(marked.parse(children));

  return (
    <div
      className={classNames(styles.mainPart, className)}
      dangerouslySetInnerHTML={{ __html: markdownedDoc }}
    />
  )
}

export default Markdown;