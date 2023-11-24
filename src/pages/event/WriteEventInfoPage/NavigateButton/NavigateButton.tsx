import { useNavigate } from 'react-router-dom';

import { ButtonWrapper, PrevButton, SubmitButton } from './NavigateButton.style';

interface NavigateButton {
  submitButtonText: string;
}

const NavigateButton = ({ submitButtonText }: NavigateButton) => {
  const navigate = useNavigate();
  return (
    <ButtonWrapper>
      <PrevButton type="button" onClick={() => navigate(-1)}>
        이전으로
      </PrevButton>
      <SubmitButton type="submit">{submitButtonText}</SubmitButton>
    </ButtonWrapper>
  );
};

export default NavigateButton;
