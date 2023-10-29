import postUser from '@/apis/users/postUser';
import InputForm from '@/components/common/InputForm/InputForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ErrorMessage } from './RegisterPage.style';
import { Container, SubmitBtn, Title } from './RegisterPage.style';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME, NUMBER } = ERROR_MESSAGE.REGISTER;
  const navigate = useNavigate();

  const validationName = (input: string) => {
    const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;

    if (regex.test(input)) {
      return true;
    } else {
      return NAME;
    }
  };
  const validationNumber = (input: string) => {
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (regex.test(input)) {
      return true;
    } else {
      return NUMBER;
    }
  };

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const { name, number } = data;
      await postUser({ name, number });
      navigate('/');
    } catch {
      throw new Error('폼을 제출하는데 실패했습니다.');
    }
  };

  return (
    <Container onSubmit={handleSubmit(handleFormSubmit)}>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm
        {...register('name', {
          required: REQUIRED_NAME,
          minLength: { value: 2, message: `${NAME}` },
          maxLength: { value: 10, message: `${NAME}` },
          validate: validationName,
        })}
        labelText="이름"
        inputType="text"
        placeholder="이름을 입력해주세요."
      />
      {errors.name && <ErrorMessage>{errors.name.message as string}</ErrorMessage>}
      <InputForm
        {...register('number', { required: REQUIRED_NUMBER, validate: validationNumber })}
        labelText="연락처"
        inputType="tel"
        placeholder="숫자만 입력해주세요."
      />
      {errors.number && <ErrorMessage>{errors.number.message as string}</ErrorMessage>}
      <SubmitBtn type="submit">가입 완료</SubmitBtn>
    </Container>
  );
};

export default RegisterPage;
