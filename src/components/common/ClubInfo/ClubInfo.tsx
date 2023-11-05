import { Club } from '@/types/club';

import {
  ClubInfoContainer,
  ClubIntroductionWrapper,
  ClubMemberCountWrapper,
  ClubNameWrapper,
} from './ClubInfo.style';

const ClubInfo = ({ info, name, memberCount }: Pick<Club, 'info' | 'name' | 'memberCount'>) => {
  return (
    <ClubInfoContainer>
      <ClubNameWrapper>{name}</ClubNameWrapper>
      <ClubIntroductionWrapper>{info}</ClubIntroductionWrapper>
      <ClubMemberCountWrapper>멤버 {memberCount}명</ClubMemberCountWrapper>
    </ClubInfoContainer>
  );
};

export default ClubInfo;
