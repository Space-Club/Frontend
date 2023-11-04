import postInviteLink from '@/apis/club/postInviteLink';
import { INVITE_LINK } from '@/constants/club';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import {
  InputWrapper,
  InviteLinkContainer,
  ReadonlyInput,
  SubTitle,
  SubmitButton,
  Title,
  TitleWrapper,
} from './InviteLink.style';

const InviteLink = () => {
  const { clubId = '' } = useParams();
  const { data, refetch } = useQuery(['inviteLink'], () => postInviteLink({ clubId }), {
    enabled: false,
    initialData: {
      invitationCode: '',
    },
  });

  return (
    <InviteLinkContainer>
      <TitleWrapper>
        <Title>초대 링크</Title>
        <SubTitle>링크의 유효기간은 {INVITE_LINK.VALID_TIME}시간입니다.</SubTitle>
      </TitleWrapper>
      <InputWrapper>
        <ReadonlyInput value={data.invitationCode} readOnly />
        <SubmitButton onClick={() => refetch()}>생성</SubmitButton>
      </InputWrapper>
    </InviteLinkContainer>
  );
};

export default InviteLink;
