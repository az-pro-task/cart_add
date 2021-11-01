import { useEffect, useState } from "react";
import getServiceToken from "./getServiceToken";

const BREAKPOINT = 750;

export default function usePlatform(breakpoint = BREAKPOINT) {
  const [width, setWidth] = useState(window.document.body.clientWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.document.body.clientWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return {
    isMobile: width <= breakpoint
  };
}

export const PlatformService = getServiceToken(usePlatform, { isMobile: window.document.body.clientWidth <= BREAKPOINT });
