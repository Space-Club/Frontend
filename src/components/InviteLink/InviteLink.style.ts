import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const InviteLinkContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const SubTitle = styled.div`
  font-size: ${Theme.fontSize.smallContent};
  margin-left: 1rem;
  color: ${Theme.color.tRed};
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ReadonlyInput = styled.input`
  flex-grow: 1;
  height: 3rem;
  outline: none;
  border: 1px solid ${Theme.color.tLine};
  border-radius: 1rem;
  padding-left: 1rem;
  box-sizing: border-box;
`;
const CopyButton = styled.button`
  font-size: ${Theme.fontSize.smallContent};
  border: none;
  outline: none;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 0.25rem;
  cursor: pointer;
`;
const SubmitButton = styled(CopyButton)`
  background-color: ${Theme.color.tPurple};
  color: white;
`;

export {
  InviteLinkContainer,
  TitleWrapper,
  SubTitle,
  InputWrapper,
  ReadonlyInput,
  CopyButton,
  SubmitButton,
};
