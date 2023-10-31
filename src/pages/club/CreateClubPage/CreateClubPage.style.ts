import styled from '@emotion/styled';

const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const TitleStyled = styled.h1`
  font-size: 40px;
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  min-height: 17rem;
  height: 60%;
  gap: 5%;
`;

const ClubInfoWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 40%;
`;

const ButtonWrapperStyled = styled.div`
  position: fixed;
  right: 10%;
  bottom: 10%;
`;

export {
  HeaderContainerStyled,
  TitleStyled,
  ContentWrapperStyled,
  ClubInfoWrapperStyled,
  ButtonWrapperStyled,
};
