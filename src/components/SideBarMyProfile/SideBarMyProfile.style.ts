import styled from '@emotion/styled';

const MyProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 1.6rem;
  background: rgba(239, 239, 244, 0.2);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const ProfileImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { MyProfileStyled, ProfileImageStyled };
