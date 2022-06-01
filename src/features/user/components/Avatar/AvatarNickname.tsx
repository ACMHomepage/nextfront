import styles from './AvatarNickname.module.scss';

interface AvatarNickname {
  nickname: string;
}

const AvatarNickname = (props: AvatarNickname) => {
  const { nickname } = props;

  const nicknameArray = nickname.split(' ');
  const result = nicknameArray
    .map(part => part[0])
    .filter(firstChar => firstChar !== undefined)
    .join('')
    .toUpperCase();

  return (
    <div className={styles.avatarNickname}>
      {result}
    </div>
  )
}

export default AvatarNickname;