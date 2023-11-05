import Theme from '@/styles/Theme';
import { ellipsisTitle, twoLineTitle } from '@/styles/common';
import styled from '@emotion/styled';

const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1.3rem;
`;

const ClubNameWrapper = styled(ellipsisTitle)`
  width: 100%;
  font-size: ${Theme.fontSize.largeTitle};
  color: ${Theme.color.white};
`;

const ClubIntroductionWrapper = styled(twoLineTitle)`
  width: 100%;
  font-size: ${Theme.fontSize.smallTitle};
  color: ${Theme.color.tWhiteGrey};
`;

const ClubMemberCountWrapper = styled(ellipsisTitle)`
  width: 100%;
  font-size: ${Theme.fontSize.largeContent};
  color: ${Theme.color.white};
`;

export { ClubInfoContainer, ClubNameWrapper, ClubIntroductionWrapper, ClubMemberCountWrapper };
