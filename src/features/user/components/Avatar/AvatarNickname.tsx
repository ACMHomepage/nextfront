import classNames from 'classnames';

import styles from './AvatarNickname.module.scss';

interface AvatarNickname {
  nickname: string;
  size?: 'default' | 'lg';
}

const AvatarNickname = (props: AvatarNickname) => {
  const { nickname, size = 'default' } = props;

  const nicknameArray = nickname.split(' ');
  const result = nicknameArray
    .map(part => part[0])
    .filter(firstChar => firstChar !== undefined)
    .join('')
    .toUpperCase();

  const classNameBase = styles.avatarNickname;
  const classNameSize = {
    default: styles.po_size_default,
    lg: styles.po_size_lg,
  }
  const className = classNames(classNameBase, classNameSize[size]);

  return (
    <div className={className}>
      {result}
    </div>
  )
}

export default AvatarNickname;