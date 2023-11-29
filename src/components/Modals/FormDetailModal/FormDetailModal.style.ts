import Theme from '@/styles/Theme';
import { memberManagerScrollAreaStyled } from '@/styles/common';
import styled from '@emotion/styled';

const SubmittedFormDetailTitleStyled = styled.h1`
  color: black;
  font-size: ${Theme.fontSize.smallTitle};
`;

const FormDetailModalContainer = styled(memberManagerScrollAreaStyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 70%;
  min-width: 20rem;
  max-height: 40rem;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 50;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 1.6rem;
  background-color: ${Theme.color.tWhiteGrey};
  overflow: auto;
`;

export { SubmittedFormDetailTitleStyled, FormDetailModalContainer };
