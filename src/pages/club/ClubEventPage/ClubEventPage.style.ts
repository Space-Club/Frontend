import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ContentSpacer = styled.div`
  height: 1.3rem;
`;

const EmptyClubEvent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.mediumContent};
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 5rem;
`;

export { ContentSpacer, ButtonWrapper, EmptyClubEvent };
