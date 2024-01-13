import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CommentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${Theme.fontSize.smallContent};
  font-weight: 600;
`;

const CommentContentStyled = styled.div`
  width: 70%;
  font-size: ${Theme.fontSize.smallContent};
  word-break: break-all;
`;

const PrivateContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 70%;
  color: ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.smallContent};
`;

const CreatedDateStyled = styled.div`
  font-size: ${Theme.fontSize.tagText};
  color: ${Theme.color.tSeparator};
`;

const DeleteButtonAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
`;

export {
  CommentContainer,
  AuthorInfoWrapper,
  CommentContentStyled,
  CreatedDateStyled,
  DeleteButtonAreaStyled,
  PrivateContentWrapper,
};
