import { User } from "lucide-react";
import Icon from "src/commons/components/Icon";

import useSelf from "src/features/auth/apis/useSelf";

import AvatarNickname from "./AvatarNickname";

interface AvatarSelfProps {
  size?: 'default' | 'lg' | 'xl';
  className?: string;
}

const AvatarSelf = (props: AvatarSelfProps) => {
  const { size, className } = props;

  const self = useSelf();
  if (self === undefined) {
    return <Icon from={User} className={className} />;
  }
  return (
    <AvatarNickname
      nickname={self!.nickname}
      size={size}
      className={className}
    />
  );
}

export default AvatarSelf;