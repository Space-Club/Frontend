import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const ClubMemberContainer = styled(memberManagerScrollAreaStyled)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  background-color: ${Theme.color.tWhiteGrey};
  border-radius: 1.3125rem;
`;

const ClubMemberAvatarWrapper = styled.div`
  display: flex;
  float: left;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 50%;
`;

export { ClubMemberContainer, ClubMemberAvatarWrapper };
