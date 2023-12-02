import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Content } from './Layout.style';
import SideNav from './SideNav';

const Layout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  return (
    <Container>
      <SideNav isSideNavOpen={isSideNavOpen} onClick={toggleSideNav} />
      <Content isSideNavOpen={isSideNavOpen}>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
