import styled from '@emotion/styled';

interface VerticalScrollStyledProps {
  height: string;
}

const VerticalScrollStyled = styled.div<VerticalScrollStyledProps>`
  height: ${({ height }) => height + 'rem'};
  overflow: auto;
`;

export { VerticalScrollStyled };
