import Theme from '@/styles/Theme';
import { ellipsisTitle, twoLineTitle } from '@/styles/common';
import styled from '@emotion/styled';

const ClubInfoContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1.3rem;
`;

const ClubNameWrapper = styled(ellipsisTitle)<{ reverse?: boolean }>`
  width: 100%;
  font-size: ${Theme.fontSize.largeTitle};
  color: ${({ reverse }) => (reverse ? `${Theme.color.black}` : `${Theme.color.white}`)};
`;

const ClubIntroductionWrapper = styled(twoLineTitle)<{ reverse?: boolean }>`
  width: 100%;
  font-size: ${Theme.fontSize.smallTitle};
  color: ${({ reverse }) => (reverse ? `${Theme.color.textGrey}` : `${Theme.color.tWhiteGrey}`)};
`;

const ClubMemberCountWrapper = styled(ellipsisTitle)<{ reverse?: boolean }>`
  width: 100%;
  font-size: ${Theme.fontSize.largeContent};
  color: ${({ reverse }) => (reverse ? `${Theme.color.semiBlack}` : `${Theme.color.white}`)};
`;

export { ClubInfoContainer, ClubNameWrapper, ClubIntroductionWrapper, ClubMemberCountWrapper };
