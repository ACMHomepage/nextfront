import { User } from 'lucide-react';
import AvatarUser from './AvatarUser';
import AvatarSelf from './AvatarSelf';


interface AvatarSelfProps {
  self: true;
}

interface AvatarUserProps {
  userId: number;
}

type AvatarProps = (AvatarSelfProps | AvatarUserProps) & {
  size?: 'default' | 'lg';
};

const Avatar = (props: AvatarProps) => {
  const { size } = props;

  if ('self' in props) {
    return <AvatarSelf size={size} />;
  } else {
    return <AvatarUser userId={props.userId} size={size} />
  }
}

export default Avatar;