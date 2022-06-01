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
  size?: 'default' | 'lg' | 'xl';
  className?: string;
};

const Avatar = (props: AvatarProps) => {
  const { size, className } = props;

  if ('self' in props) {
    return <AvatarSelf size={size} className={className} />;
  } else {
    return <AvatarUser userId={props.userId} size={size} className={className} />
  }
}

export default Avatar;