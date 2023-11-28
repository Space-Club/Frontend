import { PurpleButton } from '@/pages/event/EventDetailPage/EventDetailPage.style';
import Theme from '@/styles/Theme';
import { ellipsisTitle, textAreaScrollBar } from '@/styles/common';
import styled from '@emotion/styled';

import { ModalBaseContainer } from './Modal.style';

const NoticeModalContainer = styled(ModalBaseContainer)`
  display: flex;
  height: 70vh;
  width: 60vw;
  flex-direction: column;
  padding: 0;
  transform: translate(-50%, -50%);
  border-radius: 1.6rem;
  animation: ${Theme.keyframe.fadeIn} 0.1s ease-in-out;
`;

const NoticeModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1.2rem;
`;

const NoticeCloseButtonStyled = styled.div`
  cursor: pointer;
`;

const NoticeTitleStyled = styled(ellipsisTitle)`
  flex: 1;
  font-size: ${Theme.fontSize.smallTitle};
  margin-left: 0.7rem;
`;

const NoticeButtonStyled = styled(PurpleButton)`
  height: 2rem;
  padding: 0 0.6rem;
  margin-left: 0.3rem;
`;

const NoticeContentWrapper = styled(textAreaScrollBar)`
  height: 100%;
  padding: 1.5rem 2.6rem;
  resize: none;
  overflow-y: auto;
  background-color: ${Theme.color.white};
  &:focus {
    outline: none;
  }
`;

export {
  NoticeModalHeaderWrapper,
  NoticeContentWrapper,
  NoticeModalContainer,
  NoticeTitleStyled,
  NoticeCloseButtonStyled,
  NoticeButtonStyled,
};
