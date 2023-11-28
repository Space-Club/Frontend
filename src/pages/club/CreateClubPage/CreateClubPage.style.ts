import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TitleStyled = styled.h1`
  display: flex;
  align-items: center;
  height: 8rem;
  padding: 0 4rem;
  font-size: ${Theme.fontSize.extraTitle};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const ContentWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5%;
  width: 100%;
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
  PageContainer,
  TitleStyled,
  ContentContainer,
  ContentWrapperStyled,
  ClubInfoWrapperStyled,
  ButtonWrapperStyled,
  ImageSelectWrapper,
  ErrorMessageStyled,
};
