import { INVITE_LINK } from '@/constants/club';
import useGetInviteClub from '@/hooks/query/club/useGetInviteClub';
import useInviteLinkQuery from '@/hooks/query/club/useInviteLinkQuery';
import { MediumTitleStyled } from '@/styles/common';

import { useParams } from 'react-router-dom';

import {
  CopyButton,
  InputWrapper,
  InviteLinkContainer,
  ReadonlyInput,
  SubTitle,
  SubmitButton,
  TitleWrapper,
} from './InviteLink.style';

const InviteLink = () => {
  const { clubId } = useParams();
  const { inviteLink: newInviteLink, refetch } = useInviteLinkQuery();
  if (!clubId) {
    throw new Error('해당 클럽 id는 존재하지 않습니다.');
  }

  const { inviteLinkData } = useGetInviteClub({ clubId });

  const validateInvite = () => {
    const { inviteLink, isExpired } = inviteLinkData ?? {};
    if (isExpired) return '초대링크가 만료되었습니다. 새로운 초대링크를 생성해주세요.';
    else if (inviteLink) return inviteLink;
    else return '초대링크 생성하기';
  };

  return (
    <InviteLinkContainer>
      <TitleWrapper>
        <MediumTitleStyled>초대 링크</MediumTitleStyled>
        <SubTitle>링크의 유효기간은 {INVITE_LINK.VALID_TIME}시간입니다.</SubTitle>
      </TitleWrapper>
      <InputWrapper>
        <ReadonlyInput value={newInviteLink ?? validateInvite()} readOnly />
        <CopyButton type="button">복사</CopyButton>
        <SubmitButton onClick={() => refetch()}>생성</SubmitButton>
      </InputWrapper>
    </InviteLinkContainer>
  );
};

export default InviteLink;
