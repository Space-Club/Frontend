import { Outlet } from 'react-router-dom';

import { Container, Content } from './Layout.style';
import SideNav from './SideNav';

const Layout = () => {
  return (
    <Container>
      <SideNav />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;
