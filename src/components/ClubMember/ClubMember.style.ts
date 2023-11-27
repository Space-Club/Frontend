import Theme from '@/styles/Theme';
import { hoverBox, memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const ClubMemberContainer = styled(memberManagerScrollAreaStyled)`
  height: 100%;
  padding: 0.6rem 0.3rem 0.6rem 1rem;
  overflow-y: auto;
  background-color: ${Theme.color.tWhiteGrey};
  border-radius: 1.3125rem;
`;

const ClubMemberAvatarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const ClubMemberAvatarWrapper = styled(hoverBox)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export { ClubMemberContainer, ClubMemberAvatarWrapper, ClubMemberAvatarsWrapper };
