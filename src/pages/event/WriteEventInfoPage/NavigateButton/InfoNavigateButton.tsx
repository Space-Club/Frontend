import { useNavigate } from 'react-router-dom';

import { ButtonWrapper, PrevButton, SubmitButton } from './InfoNavigateButton.style';

interface InfoNavigateButton {
  submitButtonText: string;
}

const InfoNavigateButton = ({ submitButtonText }: InfoNavigateButton) => {
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

export default InfoNavigateButton;
