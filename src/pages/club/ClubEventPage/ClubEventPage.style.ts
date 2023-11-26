import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

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

export { ButtonWrapper, EmptyClubEvent };
