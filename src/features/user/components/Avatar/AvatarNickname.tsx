import classNames from 'classnames';

import styles from './AvatarNickname.module.scss';

interface AvatarNickname {
  nickname: string;
  size?: 'default' | 'lg' | 'xl';
  className?: string;
}

const AvatarNickname = (props: AvatarNickname) => {
  const { nickname, size = 'default', className: classNameBase } = props;

  const nicknameArray = nickname.split(' ');
  const result = nicknameArray
    .map(part => part[0])
    .filter(firstChar => firstChar !== undefined)
    .join('')
    .toUpperCase();

  const classNameAvatar = styles.avatarNickname;
  const classNameSize = {
    default: styles.po_size_default,
    lg: styles.po_size_lg,
    xl: styles.po_size_xl,
  }
  const className = classNames(
    classNameAvatar,
    classNameSize[size],
    classNameBase,
  );

  return (
    <div className={className}>
      {result}
    </div>
  )
}

export default AvatarNickname;