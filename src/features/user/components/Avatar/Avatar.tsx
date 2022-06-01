import { User } from 'lucide-react';
import AvatarUser from './AvatarUser';
import AvatarSelf from './AvatarSelf';


interface AvatarSelfProps {
  self: true;
}

interface AvatarUserProps {
  userId: number;
}

type AvatarProps = AvatarSelfProps | AvatarUserProps;

const Avatar = (props: AvatarProps) => {
  if ('self' in props) {
    return <AvatarSelf />;
  } else {
    return <AvatarUser userId={props.userId} />
  }
}

export default Avatar;