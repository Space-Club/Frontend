import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
`;

const TitleStyled = styled.h1`
  font-size: ${Theme.fontSize.extraTitle};
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
  font-size: ${Theme.fontSize.smallTitle};
`;

const ButtonWrapperStyled = styled.div`
  position: fixed;
  right: 10%;
  bottom: 10%;
`;

const ImageSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LengthCheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LengthCheckStyled = styled.span`
  font-size: ${Theme.fontSize.smallContent};
`;

const ErrorMessageStyled = styled.span`
  font-size: ${Theme.fontSize.smallContent};
  color: ${Theme.color.tRed};
`;

export {
  HeaderContainerStyled,
  TitleStyled,
  ContentWrapperStyled,
  ClubInfoWrapperStyled,
  ButtonWrapperStyled,
  ImageSelectWrapper,
  ErrorMessageStyled,
  LengthCheckStyled,
  LengthCheckWrapper,
};
