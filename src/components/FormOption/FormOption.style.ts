import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormOptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  height: 3.8rem;
  border: 1px solid ${Theme.color.gray};
  border-radius: 0.3125rem;
  padding: 0.5rem 1.2rem;
  transition: all 0.1s ease-in-out;
  margin-bottom: 0.5rem;
`;

const FormOptionTitleStyled = styled.p`
  font-size: ${Theme.fontSize.smallContent};
`;

const FormOptionCloseButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: none;
  align-items: center;
  outline: none;
`;

export { FormOptionContainer, FormOptionTitleStyled, FormOptionCloseButton };
