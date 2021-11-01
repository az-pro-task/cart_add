import React, { FC, useContext } from "react";
import { PlatformService } from "../../tools/usePlatform";
import "./Layout.scss";

export interface LayoutProps {
  renderNav: () => React.ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  const { isMobile } = useContext(PlatformService);
  return (
    <main className={`my-layout ${isMobile ? "" : "is-desktop"}`}>
      <header className="my-header">{props.renderNav()}</header>
      <div className="my-content">{props.children}</div>
    </main>
  );
};

export default Layout;
