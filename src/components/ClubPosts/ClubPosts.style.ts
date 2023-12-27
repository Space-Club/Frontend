import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const PostsContainer = styled.div`
  &:not(:last-of-type)::after {
    width: 100%;
    border: 1px solid ${Theme.color.tSeparator};
  }
`;

export { PostsContainer };
