import InputForm from '@/components/common/InputForm/InputForm';

import { useRef, useState } from 'react';

import { Container, SubmitBtn, Title } from './RegisterPage.style';

const RegisterPage = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm
        labelText="이름"
        labelId="id"
        inputType="text"
        value={name}
        inputRef={nameRef}
        onChange={(e) => setName(e.target.value)}
      />
      <InputForm
        labelText="연락처"
        labelId="number"
        inputType="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <SubmitBtn>가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
