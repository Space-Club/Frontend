import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const SubmitFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitFormTitle = styled.p`
  font-size: ${Theme.fontSize.extraTitle};
`;
const SubmitFormContent = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
  margin-bottom: 1rem;
`;
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
  cursor: pointer;
`;

export { SubmitFormContainer, SubmitFormTitle, SubmitFormContent, FormWrapper, SubmitButton };
