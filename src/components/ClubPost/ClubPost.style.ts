import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 6.2rem;
  padding: 0.5rem;

  &:not(:last-of-type)::after {
    width: 100%;
    border-bottom: 1px solid ${Theme.color.tSeparator};
  }
`;

const BoardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  min-width: 20rem;
  width: 70%;
  cursor: pointer;
`;

const BoardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 12rem;
  width: 30%;
  font-size: ${Theme.fontSize.smallContent};
  color: ${Theme.color.semiBlack};
`;

const PostDateWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 6rem;
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-width: 6rem;
`;

const TitleStyled = styled.h1`
  font-size: ${Theme.fontSize.largeContent};
  font-weight: 800;
`;

const ContentStyled = styled.p`
  font-size: ${Theme.fontSize.mediumContent};
`;

export {
  BoardContainer,
  BoardContentWrapper,
  PostDateWrapper,
  AuthorWrapper,
  TitleStyled,
  ContentStyled,
  BoardInfoWrapper,
};
