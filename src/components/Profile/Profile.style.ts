import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 19rem;
  margin: 3rem 0;
  gap: 4rem;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;

  input {
    font-size: ${Theme.fontSize.mediumTitle};
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

const ProfileFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;

  :first-of-type {
    margin-top: 5rem;
  }
`;

const ProfileButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  align-items: flex-end;
`;

export { ProfileContainer, InfoWrapper, ProfileButtonsWrapper, AvatarWrapper, ProfileFormStyled };
