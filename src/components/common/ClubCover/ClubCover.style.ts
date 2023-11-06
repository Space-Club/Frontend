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

export { ClubCoverContainer, ClubCoverImage, ClubCoverTransparent };
