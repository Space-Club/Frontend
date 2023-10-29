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
`;

const ProfileImageStyled = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  object-fit: cover;
`;

export { MyProfileStyled, ProfileImageStyled };
