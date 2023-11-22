import styled from '@emotion/styled';

const ClubAvatarInfoEditWrapper = styled.div`
  margin-top: 0.7rem;
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
  margin-bottom: 0.5rem;
  input {
    height: 2.375rem;
  }
  > button {
    height: 2.375rem;
    margin-top: 1.8rem;
  }
`;

const ClubCoverEditWrapper = styled.div`
  height: 9rem;
  margin: 2rem 0;
`;

const ClubBannerPreviewWrapper = styled.div`
  margin-bottom: 2.4rem;
`;

export {
  ClubAvatarInfoEditWrapper,
  ClubInfoEditWrapper,
  ClubCoverEditWrapper,
  ClubBannerPreviewWrapper,
  ClubInfoEditsWrapper,
};
