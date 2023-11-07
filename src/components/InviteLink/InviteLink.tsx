import { INVITE_LINK } from '@/constants/club';
import useInviteLinkQuery from '@/hooks/query/club/useInviteLinkQuery';

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
  const { data, refetch } = useInviteLinkQuery();

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
