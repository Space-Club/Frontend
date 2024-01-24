import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding-bottom: 1rem;
`;

const CommentCountWrapper = styled.div`
  width: 90%;
  font-size: ${Theme.fontSize.tagText};
  color: ${Theme.color.semiBlack};
`;

export { CommentsContainer, CommentCountWrapper };
