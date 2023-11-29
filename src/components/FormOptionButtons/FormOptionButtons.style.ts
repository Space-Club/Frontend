import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormOptionButtonsContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const FormOptionButtonStyled = styled.button<{ isEmpty: boolean }>`
  width: 11rem;
  margin-left: 0.5rem;
  outline: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: ${({ isEmpty }) => (isEmpty ? 'not-allowed' : 'pointer')};
  background-color: ${({ isEmpty }) => (isEmpty ? Theme.color.gray : Theme.color.tButton)};
  border: 1px solid ${({ isEmpty }) => (isEmpty ? Theme.color.gray : Theme.color.tButton)};
  color: ${Theme.color.white};
  transition: all 0.3s ease-in-out;
`;

const FormSkipButtonStyled = styled.button<{ isEmpty: boolean }>`
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid ${({ isEmpty }) => (isEmpty ? Theme.color.tButton : Theme.color.gray)};
  background-color: ${({ isEmpty }) => (isEmpty ? Theme.color.tButton : Theme.color.gray)};
  color: ${Theme.color.white};
  transition: all 0.3s ease-in-out;
`;

export { FormOptionButtonStyled, FormOptionButtonsContainer, FormSkipButtonStyled };
