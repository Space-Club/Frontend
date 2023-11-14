import { Club } from '@/types/club';

import {
  ClubInfoContainer,
  ClubIntroductionWrapper,
  ClubMemberCountWrapper,
  ClubNameWrapper,
} from './ClubInfo.style';

const ClubInfo = ({
  info,
  name,
  memberCount,
  reverse,
}: Pick<Club, 'info' | 'name' | 'memberCount' | 'reverse'>) => {
  return (
    <ClubInfoContainer>
      <ClubNameWrapper reverse={reverse}>{name}</ClubNameWrapper>
      <ClubIntroductionWrapper reverse={reverse}>{info}</ClubIntroductionWrapper>
      <ClubMemberCountWrapper reverse={reverse}>멤버 {memberCount}명</ClubMemberCountWrapper>
    </ClubInfoContainer>
  );
};

export default ClubInfo;
