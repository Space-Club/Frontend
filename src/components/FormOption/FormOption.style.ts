import Theme from '@/styles/Theme';
import { textAreaScrollBar } from '@/styles/common';
import styled from '@emotion/styled';

const FormOptionContainer = styled.div<{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 40rem;
  border: 1px solid ${Theme.color.gray};
  border-radius: 0.3125rem;
  padding: 0.5rem 1.2rem;
  margin-bottom: 0.5rem;
`;

const FormOptionTitleStyled = styled.p`
  font-size: ${Theme.fontSize.smallContent};
`;

const FormOptionCustomTextareaStyled = styled(textAreaScrollBar)`
  width: 100%;
  font-size: ${Theme.fontSize.smallContent};
  border: none;
  resize: none;
  background-color: white;
  height: 6rem;
  transition: all 0.2s ease-in-out;

  :focus {
    outline: none;
  }

  :disabled {
    color: ${Theme.color.black};
    height: 2.5rem;
  }
`;

const FormOptionButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: none;
  align-items: center;
  outline: none;
  margin-left: 0.3rem;

  translate: all 0.3s ease-in-out;
`;

export {
  FormOptionContainer,
  FormOptionTitleStyled,
  FormOptionButton,
  FormOptionCustomTextareaStyled,
};
