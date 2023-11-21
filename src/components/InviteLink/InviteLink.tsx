import { INVITE_LINK } from '@/constants/club';
import useInviteLinkQuery from '@/hooks/query/club/useInviteLinkQuery';
import { MediumTitleStyled } from '@/styles/common';

import {
  InputWrapper,
  InviteLinkContainer,
  ReadonlyInput,
  SubTitle,
  SubmitButton,
  TitleWrapper,
} from './InviteLink.style';

const InviteLink = () => {
  const { inviteLink, refetch } = useInviteLinkQuery();

  return (
    <InviteLinkContainer>
      <TitleWrapper>
        <MediumTitleStyled>초대 링크</MediumTitleStyled>
        <SubTitle>링크의 유효기간은 {INVITE_LINK.VALID_TIME}시간입니다.</SubTitle>
      </TitleWrapper>
      <InputWrapper>
        <ReadonlyInput value={inviteLink ?? '초대링크 생성하기'} readOnly />
        <SubmitButton onClick={() => refetch()}>생성</SubmitButton>
      </InputWrapper>
    </InviteLinkContainer>
  );
};

export default InviteLink;
