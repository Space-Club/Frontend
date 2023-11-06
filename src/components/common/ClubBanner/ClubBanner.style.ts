import styled from '@emotion/styled';

const ClubBannerContainer = styled.div<{ bannerSize: string }>`
  width: 100%;
  height: ${({ bannerSize }) => (bannerSize === 'small' ? '8.8rem' : '10.8rem')};
`;

const ClubAvatarInfoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  height: 100%;
`;

export { ClubBannerContainer, ClubAvatarInfoWrapper };
