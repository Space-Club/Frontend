import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const CommentCountWrapper = styled.div`
  font-size: ${Theme.fontSize.tagText};
  color: ${Theme.color.semiBlack};
`;

export { CommentsContainer, CommentCountWrapper };
