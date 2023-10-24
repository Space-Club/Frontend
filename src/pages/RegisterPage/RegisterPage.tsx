import InputForm from '@components/common/InputForm/InputForm';

import { Container, SubmitBtn, Title } from './RegisterPage.style';

const RegisterPage = () => {
  return (
    <Container>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm labelText="이름" labelId="id" inputType="text" />
      <InputForm labelText="연락처" labelId="number" inputType="tel" />
      <SubmitBtn>가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
