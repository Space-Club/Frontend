import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const FormOptionButtonsContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const FormOptionButtonStyled = styled(PurpleButton)`
  width: 11rem;
  margin-left: 0.5rem;
`;

const FormSkipButtonStyled = styled(PurpleButton)`
  background-color: ${Theme.color.gray};
  border: 1px solid ${Theme.color.gray};
`;

export { FormOptionButtonStyled, FormOptionButtonsContainer, FormSkipButtonStyled };
