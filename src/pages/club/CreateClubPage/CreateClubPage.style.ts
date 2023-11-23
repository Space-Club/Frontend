import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const TitleStyled = styled.h1`
  padding: 2rem;
  font-size: ${Theme.fontSize.extraTitle};
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;
  padding: 2rem;
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
  align-items: center;
  gap: 1rem;
`;

const ErrorMessageStyled = styled.span`
  font-size: ${Theme.fontSize.smallContent};
  color: ${Theme.color.tRed};
`;

export {
  TitleStyled,
  ContentWrapperStyled,
  ClubInfoWrapperStyled,
  ButtonWrapperStyled,
  ImageSelectWrapper,
  ErrorMessageStyled,
};
