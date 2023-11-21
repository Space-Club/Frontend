import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const MemberManagerContainer = styled(memberManagerScrollAreaStyled)`
  width: 26.3rem;
  min-height: 20rem;
  padding: 1.2rem;
  background-color: ${Theme.color.tSemiWhite};
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 1rem;
  box-sizing: border-box;
`;

export { MemberManagerContainer };
