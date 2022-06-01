import useUser from 'src/features/user/apis/useUser';
import AvatarNickname from './AvatarNickname';

interface AvatarUserProps {
  userId: number;
  size?: 'default' | 'lg';
}

const AvatarUser = (props: AvatarUserProps) => {
  const { userId, size } = props;

  const [user, state] = useUser(userId);
  if (state.loading) {
    return (
      <div>Loading...</div>
    );
  } else if (state.error) {
    return (
      <div>Error...</div>
    )
  }
  return (
    <AvatarNickname nickname={user!.nickname} size={size} />
  );
}

export default AvatarUser;