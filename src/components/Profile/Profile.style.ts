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
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

const ProfileButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
`;

export { ProfileContainer, InfoWrapper, ProfileButtonsWrapper };
