import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const FormRadioItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FormRadioItemInput = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid ${Theme.color.gray};
  border-radius: 50%;

  &:checked {
    border: 4px solid ${Theme.color.tSemiActive};
  }
  &:hover {
    cursor: pointer;
  }
`;
const FormRadioItemLabel = styled.label`
  margin-left: 0.5rem;
`;

export { FormRadioContainer, FormRadioItemWrapper, FormRadioItemInput, FormRadioItemLabel };
