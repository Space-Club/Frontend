import React from 'react';

import { Container, InputStyled, InputWrapper, LabelStyled, SubmitBtn, Title } from './style';

const RegisterPage = () => {
  return (
    <Container>
      <Title>추가 정보를 입력해주세요</Title>
      <InputWrapper>
        <LabelStyled htmlFor="id">이름</LabelStyled>
        <InputStyled id="id" type="text" />
      </InputWrapper>
      <InputWrapper>
        <LabelStyled htmlFor="number">연락처</LabelStyled>
        <InputStyled id="number" type="tel" />
      </InputWrapper>
      <SubmitBtn>가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
