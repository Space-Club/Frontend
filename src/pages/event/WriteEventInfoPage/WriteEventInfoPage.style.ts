import InputForm from '@/components/common/InputForm/InputForm';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PerformanceFormContainer = styled.form`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem 0;

  & > div:first-of-type {
    padding-right: 1.5rem;
    border-right: 1px solid ${Theme.color.tSeparator};
  }

  & > div:nth-last-of-type(2) {
    padding-left: 1.5rem;
  }
  & > div:first-child > div:nth-last-of-type(2) {
    flex-grow: 1;
  }
`;
const ContentArea = styled.div`
  width: 50%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TwoInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  &:last-of-type {
    padding-top: 1rem;
    border-top: 1px solid ${Theme.color.tSeparator};
  }
`;
const HalfInputForm = styled(InputForm)`
  width: 50%;
`;
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
const ErrorMessage = styled.p`
  font-size: 0.7rem;
  color: red;
`;

export {
  PerformanceFormContainer,
  ContentArea,
  TwoInputContainer,
  HalfInputForm,
  ButtonWrapper,
  PrevButton,
  SubmitButton,
  ErrorMessage,
};
