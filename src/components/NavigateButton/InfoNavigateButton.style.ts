import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -2rem;
  gap: 1rem;
  padding: 1rem 0;
`;
const Button = styled.button`
  width: 6rem;
  height: 3rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  color: white;
`;
const PrevButton = styled(Button)`
  background-color: ${Theme.color.idkGrey};
`;
const SubmitButton = styled(Button)`
  background-color: ${Theme.color.tSemiActive};
`;

export { ButtonWrapper, PrevButton, SubmitButton };
