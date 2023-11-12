import FormItem from '@/components/FormItem/FormItem';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem 0;
  background-color: ${Theme.color.tWhiteGrey};
`;
const SubmitButton = styled.button`
  width: 6rem;
  padding: 0.75rem 0;
  border: none;
  border-radius: 0.25rem;
  background-color: ${Theme.color.tSemiActive};
  color: white;
  box-sizing: border-box;
`;

const SubmitFormPage = () => {
  return (
    <FormWrapper>
      <FormItem id={1} title="이름" />
      <SubmitButton>신청 폼 제출하기</SubmitButton>
    </FormWrapper>
  );
};

export default SubmitFormPage;
