import InputForm from '@/components/common/InputForm/InputForm';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PerformanceFormContainer = styled.form`
  display: flex;
  width: 100%;
  padding: 3rem 0;
`;
const ContentArea = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  &:first-child {
    padding-right: 1.5rem;
    border-right: 1px solid ${Theme.color.tSeparator};
  }
  &:last-child {
    padding-left: 1.5rem;
  }
`;
const TwoInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  &:last-child {
    padding-top: 1rem;
    border-top: 1px solid ${Theme.color.tSeparator};
  }
`;
const HalfInputForm = styled(InputForm)`
  width: 50%;
`;
const SubmitButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: ${Theme.color.tSemiActive};
  box-sizing: border-box;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  color: white;
`;

export { PerformanceFormContainer, ContentArea, TwoInputContainer, HalfInputForm, SubmitButton };
