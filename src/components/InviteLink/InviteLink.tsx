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
  return (
    <InviteLinkContainer>
      <TitleWrapper>
        <Title>초대 링크</Title>
        <SubTitle>링크의 유효기간은 48시간입니다.</SubTitle>
      </TitleWrapper>
      <InputWrapper>
        <ReadonlyInput readOnly />
        <SubmitButton>생성</SubmitButton>
      </InputWrapper>
    </InviteLinkContainer>
  );
};

export default InviteLink;
