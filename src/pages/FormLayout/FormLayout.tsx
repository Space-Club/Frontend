import { PropsWithChildren, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Content, Title } from './FormLayout.style';

const FormLayout = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState('');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event');

  useEffect(() => {
    const path = location.pathname;

    if (path.endsWith('/choice')) {
      setTitle('행사의 분류를 선택하세요.');
    } else if (path.endsWith('/writeinfo')) {
      if (eventType === 'show') {
        setTitle('아래의 공연 정보를 입력해주세요.');
      } else if (eventType === 'promotion') {
        setTitle('아래의 행사 정보를 입력해주세요.');
      } else if (eventType === 'recruitment') {
        setTitle('아래의 모집 공고를 입력해주세요.');
      } else if (eventType === 'club') {
        setTitle('아래의 클럽 일정을 입력해주세요.');
      } else {
        throw new Error('잘못된 URL입니다.');
      }
    } else if (path.includes('writeform')) {
      setTitle('신청자에게 필요한 정보를 입력해주세요.');
    } else {
      throw new Error('옳지 못한 주소입니다. 다시 확인해주세요.');
    }
  }, [location.pathname]);

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default FormLayout;
