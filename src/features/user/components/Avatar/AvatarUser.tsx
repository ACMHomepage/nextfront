import useUser from '../../apis/useUser';
import AvatarNickname from './AvatarNickname';

interface AvatarUserProps {
  userId: number;
}

const AvatarUser = (props: AvatarUserProps) => {
  const { userId } = props;

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
    <AvatarNickname nickname={user!.nickname} />
  );
}

export default AvatarUser;