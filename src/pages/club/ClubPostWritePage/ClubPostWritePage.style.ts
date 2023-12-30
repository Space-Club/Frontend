import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import { ClubHomePageContainer, ClubHomeTopWrapper } from '../ClubHomePage/ClubHomePage.style';

const ClubPostWritePageContainer = styled(ClubHomePageContainer)``;

const ClubPostWriteTopWrapper = styled(ClubHomeTopWrapper)``;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0.5rem;
`;

const TitleStyled = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.3rem;
  border: 1px solid ${Theme.color.tSeparator};
`;

const ContentStyled = styled.textarea`
  width: 100%;
  height: 20rem;
  padding: 0.5rem 0.3rem;
  border: 1px solid ${Theme.color.tSeparator};
`;

const FileInputWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  padding: 0.5rem;
`;

const ErrorMessageStyled = styled.span`
  font-size: ${Theme.fontSize.smallContent};
  color: ${Theme.color.tRed};
`;

export {
  ClubPostWritePageContainer,
  ClubPostWriteTopWrapper,
  ContentWrapper,
  ButtonWrapper,
  TitleStyled,
  ContentStyled,
  FileInputWrapper,
  ErrorMessageStyled,
};
