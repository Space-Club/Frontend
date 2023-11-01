import getInviteLink from '@/apis/club/getInviteLink';

import { useState } from 'react';

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
  const { refetch } = useQuery(['inviteLink'], () => getInviteLink(), {
    enabled: false,
    onSuccess: (fetchData) => {
      setLink(fetchData.link);
    },
  });
  const [link, setLink] = useState('');

  return (
    <InviteLinkContainer>
      <TitleWrapper>
        <Title>초대 링크</Title>
        <SubTitle>링크의 유효기간은 48시간입니다.</SubTitle>
      </TitleWrapper>
      <InputWrapper>
        <ReadonlyInput value={link} readOnly />
        <SubmitButton onClick={() => refetch()}>생성</SubmitButton>
      </InputWrapper>
    </InviteLinkContainer>
  );
};

export default InviteLink;
