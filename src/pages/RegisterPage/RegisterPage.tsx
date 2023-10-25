import createUser from '@/apis/users/createUser';
import InputForm from '@/components/common/InputForm/InputForm';

import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, SubmitBtn, Title } from './RegisterPage.style';

const RegisterPage = () => {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Todo: 로그인 페이지에서 온 것이 아닐 경우 처리
    nameRef.current?.focus();
  }, []);

  const validationName = (input: string) => {
    const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;
    return regex.test(input);
  };
  const validationNumber = (input: string) => {
    const regex = /^[0-9]+$/;
    return regex.test(input);
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== '' && !validationName(value)) return;
    setName(value);
  };
  const handleChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value !== '' && !validationNumber(value)) return;
    setNumber(value);
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await createUser({ name, number });

    navigate('/');
  };

  return (
    <Container>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm
        labelText="이름"
        inputType="text"
        placeholoder="이름을 입력해주세요."
        value={name}
        inputRef={nameRef}
        onChange={handleChangeName}
      />
      <InputForm
        labelText="연락처"
        inputType="tel"
        placeholoder="숫자만 입력해주세요."
        value={number}
        onChange={handleChangeNumber}
      />
      <SubmitBtn onClick={handleSubmit}>가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
