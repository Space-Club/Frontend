import InputForm from '@/components/common/InputForm/InputForm';

import { useEffect, useRef } from 'react';

import { Container, SubmitBtn, Title } from './RegisterPage.style';

const RegisterPage = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Todo: 로그인 페이지에서 온 것이 아닐 경우 처리
    nameRef.current?.focus();
  }, []);

  return (
    <Container>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm labelText="이름" inputType="text" placeholoder="이름을 입력해주세요." />
      <InputForm labelText="연락처" inputType="tel" placeholoder="숫자만 입력해주세요." />
      <SubmitBtn>가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
