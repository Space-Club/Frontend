import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const MemberManagerContainer = styled(memberManagerScrollAreaStyled)`
  min-width: 26.3rem;
  min-height: 20rem;
  padding: 1.2rem;
  margin: auto;
  margin-top: 0.6rem;
  background-color: ${Theme.color.tSemiWhite};
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 1rem;
  box-sizing: border-box;
`;

export { MemberManagerContainer };
