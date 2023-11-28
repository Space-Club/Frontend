import InputForm from '@/components/common/InputForm/InputForm';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import usePostUser from '@/hooks/query/user/usePostUser';
import { validateName, validateNumber } from '@/utils/validate';

import { SubmitHandler, useForm } from 'react-hook-form';

import { ErrorMessage } from './RegisterPage.style';
import { RegisterContainer, SubmitButton, Title } from './RegisterPage.style';

export interface RegisterFormValue {
  name: string;
  number: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValue>();
  const { REQUIRED_NAME, REQUIRED_NUMBER, NAME } = ERROR_MESSAGE.REGISTER;
  const { registerUser } = usePostUser();

  const onSubmit: SubmitHandler<RegisterFormValue> = ({ name, number }) => {
    registerUser({ name, phoneNumber: number });
  };

  return (
    <RegisterContainer onSubmit={handleSubmit(onSubmit)}>
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
