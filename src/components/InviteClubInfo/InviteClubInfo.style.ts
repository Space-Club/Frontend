import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ClubInfoWrapper = styled.div`
  display: flex;
`;

const MessageStyled = styled.p`
  color: ${Theme.color.black};
  font-size: ${Theme.fontSize.smallTitle};
`;

export { ClubInfoWrapper, MessageStyled };
