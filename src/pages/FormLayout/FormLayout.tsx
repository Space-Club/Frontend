import { FormOptionContextProvider } from '@/context/FormOptionContext';

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Container, Content, Title } from './FormLayout.style';

const FormLayout = () => {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.endsWith('/choice')) {
      setTitle('행사의 분류를 선택하세요.');
    } else if (path.endsWith('/writeinfo')) {
      setTitle('아래의 공연 정보를 입력해주세요.');
    } else if (path.includes('writeform')) {
      setTitle('신청자에게 필요한 정보를 입력해주세요.');
    } else {
      throw new Error('옳지 못한 주소입니다. 다시 확인해주세요.');
    }
  }, [location.pathname]);

  return (
    <FormOptionContextProvider>
      <Container>
        <Title>{title}</Title>
        <Content>
          <Outlet />
        </Content>
      </Container>
    </FormOptionContextProvider>
  );
};

export default FormLayout;
