import { useEffect } from "react";
import { useRouter } from "next/router";

import { url as indexUrl } from 'pages/index';

import useSelf from "./useSelf"

const useMakeSureSelfIsAdmin = () => {
  const self = useSelf();
  const router = useRouter();

  useEffect(() => {
    if (self === undefined || !self.isAdmin) {
      router.push(indexUrl());
    }
  }, [self]);
}

export default useMakeSureSelfIsAdmin;