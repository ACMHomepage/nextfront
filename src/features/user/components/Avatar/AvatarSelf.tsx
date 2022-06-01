import { User } from "lucide-react";
import Icon from "src/commons/components/Icon";

import useSelf from "src/features/auth/apis/useSelf";

import AvatarNickname from "./AvatarNickname";

const AvatarSelf = () => {
  const self = useSelf();
  if (self === undefined) {
    return <Icon from={User} />;
  }
  return <AvatarNickname nickname={self!.nickname} />;
}

export default AvatarSelf;