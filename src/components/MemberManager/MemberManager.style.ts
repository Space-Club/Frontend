import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const MemberManagerContainer = styled(memberManagerScrollAreaStyled)`
  display: flex;
  flex-direction: column;
  width: 26.3rem;
  background-color: ${Theme.color.tSemiWhite};
  border-radius: 1rem;
  height: 100%;
  overflow: auto;
  padding: 1.2rem;
  box-sizing: border-box;
`;

export { MemberManagerContainer };
