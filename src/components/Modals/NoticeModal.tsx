import Theme from '@/styles/Theme';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { BackgroundOverlay } from './Modal.style';
import {
  NoticeButtonStyled,
  NoticeCloseButtonStyled,
  NoticeContentWrapper,
  NoticeModalContainer,
  NoticeModalHeaderWrapper,
  NoticeTitleStyled,
} from './NoticeModal.style';
import Portal from './Portal';

interface NoticeModalProps {
  onClose: () => void;
  content?: string;
  isNew?: boolean;
}

const NoticeModal = ({ onClose, isNew, content, ...props }: NoticeModalProps) => {
  const noticeContentRef = useRef<HTMLDivElement>(null);

  const [isEdit, setIsEdit] = useState(isNew);

  const handleCreateNoticeButtonClick = () => {
    //TODO: POST공지사항 API 호출
    onClose();
  };

  const handleEditButtonClick = () => {
    setIsEdit(true);
  };

  const handleEditCompleteButtonClick = () => {
    // console.log(noticeContentRef.current?.innerText); TODO: PUT공지사항 API 호출
    setIsEdit(false);
  };

  useEffect(() => {
    if (isEdit) {
      noticeContentRef.current?.focus();
    }
  }, [isEdit]);

  return (
    <Portal>
      <BackgroundOverlay onClick={onClose} />
      <NoticeModalContainer>
        <NoticeModalHeaderWrapper>
          <NoticeCloseButtonStyled>
            <AiOutlineClose color={Theme.color.tActive} onClick={onClose} />
          </NoticeCloseButtonStyled>
          <NoticeTitleStyled>공지사항</NoticeTitleStyled>
          {!isNew && !isEdit && (
            <NoticeButtonStyled reverse onClick={handleEditButtonClick}>
              수정
            </NoticeButtonStyled>
          )}
          {!isNew && isEdit && (
            <NoticeButtonStyled onClick={handleEditCompleteButtonClick}>
              수정완료
            </NoticeButtonStyled>
          )}
          {isNew && (
            <NoticeButtonStyled onClick={handleCreateNoticeButtonClick}>
              작성완료
            </NoticeButtonStyled>
          )}
        </NoticeModalHeaderWrapper>
        <NoticeContentWrapper ref={noticeContentRef} contentEditable={isEdit} {...props}>
          {content}
        </NoticeContentWrapper>
        <NoticeModalHeaderWrapper />
      </NoticeModalContainer>
    </Portal>
  );
};

export default NoticeModal;
