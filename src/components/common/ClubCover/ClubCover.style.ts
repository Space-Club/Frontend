import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ClubCoverContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;

const ClubCoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ClubCoverTransparent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${Theme.color.clubCoverTransparent};
`;
const ClubCoverEditButtonStyled = styled(PurpleButton)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.875rem;
`;

export { ClubCoverContainer, ClubCoverImage, ClubCoverTransparent, ClubCoverEditButtonStyled };
