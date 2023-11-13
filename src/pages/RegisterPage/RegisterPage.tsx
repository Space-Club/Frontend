import postUser from '@/apis/users/postUser';
import InputForm from '@/components/common/InputForm/InputForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { validateName, validateNumber } from '@/utils/validate';

import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ErrorMessage } from './RegisterPage.style';
import { RegisterContainer, SubmitButton, Title } from './RegisterPage.style';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;
  const navigate = useNavigate();

  const onRegisterSubmitForm = async (data: FieldValues) => {
    try {
      const { name, number } = data;
      await postUser({ name, phoneNumber: number }, navigate);
      navigate('/');
    } catch {
      throw new Error('폼을 제출하는데 실패했습니다.');
    }
  };

  return (
    <RegisterContainer onSubmit={handleSubmit(onRegisterSubmitForm)}>
      <Title>추가 정보를 입력해주세요</Title>
      <InputForm
        {...register('name', {
          required: REQUIRED_NAME,
          minLength: { value: 2, message: `${NAME}` },
          maxLength: { value: 10, message: `${NAME}` },
          validate: validateName,
        })}
        labelText="이름"
        inputType="text"
        placeholder="이름을 입력해주세요."
      />
      {errors.name && <ErrorMessage>{errors.name.message as string}</ErrorMessage>}
      <InputForm
        {...register('number', { required: REQUIRED_NUMBER, validate: validateNumber })}
        labelText="연락처"
        inputType="tel"
        placeholder="숫자만 입력해주세요."
      />
      {errors.number && <ErrorMessage>{errors.number.message as string}</ErrorMessage>}
      <SubmitButton type="submit">가입 완료</SubmitButton>
    </RegisterContainer>
  );
};

export default RegisterPage;
