import { useContext, useState } from "react";
import { PlatformService } from "../../tools/usePlatform";

export default function useMiniCart() {
  const { isMobile } = useContext(PlatformService);
  const [visible, setVisible] = useState(false);

  const handleClick = () => isMobile && setVisible((v) => !v);
  const handleHover = () => !isMobile && setVisible((v) => !v);
  return { visible, handleClick, handleHover, isMobile };
}
