import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormItemContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
`;
const QuestionStyled = styled.p`
  margin-bottom: 1rem;
  color: ${Theme.color.semiBlack};
`;
const AnswerStyled = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid ${Theme.color.tSeparator};
`;

export { FormItemContainer, QuestionStyled, AnswerStyled };
