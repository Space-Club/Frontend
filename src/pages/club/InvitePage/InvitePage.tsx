import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import BigLogo from '@/components/common/BigLogo/BigLogo';
import ClubInfo from '@/components/common/ClubInfo/ClubInfo';
import { LOGO_TEXT } from '@/constants/logo';
import useJoinClub from '@/hooks/query/club/useJoinClub';

import { useParams } from 'react-router-dom';

import {
  ClubInfoWrapper,
  InviteInfoWrapper,
  LogoNInfoWrapper,
  MessageStyled,
  PageContainer,
} from './InvitePage.style';

const InvitePage = () => {
  const inviteCode = String(useParams());
  const { joinClub, isLoading } = useJoinClub();
  //TODO: 가입할 클럽 정보 요청 api

  return (
    <PageContainer>
      <LogoNInfoWrapper>
        <BigLogo logoText={LOGO_TEXT.SPACE_CLUB} />
        <InviteInfoWrapper>
          <ClubInfoWrapper>
            <Avatar avatarSize="medium" profileImageSrc="https://picsum.photos/200/300" isClub />
            <ClubInfo reverse name="연사모" info="연어를 사랑하는 사람들의 모임" memberCount="4" />
          </ClubInfoWrapper>
          <MessageStyled>연사모에 가입하시겠습니까?</MessageStyled>
          <ActiveButton
            buttonText="가입하기"
            fontSize="smallTitle"
            isLoading={isLoading}
            onClick={() => joinClub(inviteCode)}
          />
        </InviteInfoWrapper>
      </LogoNInfoWrapper>
    </PageContainer>
  );
};

export default InvitePage;
