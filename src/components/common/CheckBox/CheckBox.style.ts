import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CheckBoxContainer = styled.div`
  height: 2.5rem;
  display: flex;
  width: fit-content;
  align-items: center;
  border: 1px solid ${Theme.color.gray};
  border-radius: 1rem;
  padding: 0 0.7rem;
`;

const CheckBoxInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0.4rem;
  cursor: pointer;
`;

const CheckBoxLabelStyled = styled.label`
  font-size: ${Theme.fontSize.smallContent};
  margin-right: 0.3rem;
`;

const CheckBoxInputStyled = styled.input``;

export { CheckBoxContainer, CheckBoxInfoWrapper, CheckBoxLabelStyled, CheckBoxInputStyled };
