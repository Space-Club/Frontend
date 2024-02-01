import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ClubPostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
`;

const PostAuthorWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.3rem;
  width: 100%;
`;

const PostTitleStyled = styled.h1`
  font-size: ${Theme.fontSize.smallTitle};
  font-weight: 600;
`;

const PostContentStyled = styled.p`
  font-size: ${Theme.fontSize.largeContent};
  word-break: break-all;
  white-space: pre-wrap;
`;

const PostedDateStyled = styled.div`
  font-size: ${Theme.fontSize.smallContent};
  color: ${Theme.color.textGrey};
`;

const PostSeparatorStyled = styled.div`
  width: 100%;
  border-bottom: 1px solid ${Theme.color.tSeparator};
`;

const ImageStyled = styled.img`
  max-width: 40rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.3rem;
  width: 100%;
`;

export {
  ClubPostDetailContainer,
  PostAuthorWrapper,
  PostTitleStyled,
  PostContentStyled,
  PostedDateStyled,
  PostSeparatorStyled,
  ButtonWrapper,
  ImageStyled,
};
