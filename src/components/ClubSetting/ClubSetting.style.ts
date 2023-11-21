import styled from '@emotion/styled';

const ClubAvatarInfoEditWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const ClubInfoEditsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ClubInfoEditWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  > button {
    height: 2.375rem;
    margin-top: 2.1rem;
  }
`;

const ClubCoverEditWrapper = styled.div``;

const ClubBannerPreviewWrapper = styled.div``;

export {
  ClubAvatarInfoEditWrapper,
  ClubInfoEditWrapper,
  ClubCoverEditWrapper,
  ClubBannerPreviewWrapper,
  ClubInfoEditsWrapper,
};
