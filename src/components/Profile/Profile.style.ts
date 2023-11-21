import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
  gap: 4rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  input {
    font-size: ${Theme.fontSize.mediumTitle};
  }
`;

const ProfileButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { ProfileContainer, InfoWrapper, ProfileButtonsWrapper };
