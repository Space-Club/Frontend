import usePostNoticeMutation from '@/hooks/query/club/usePostClubNoticeMutation';
import useToast from '@/hooks/useToast';
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
  clubId: string;
  content?: string;
  isManager?: boolean;
  isNew?: boolean;
}

const NoticeModal = ({
  onClose,
  clubId,
  isManager,
  isNew,
  content,
  ...props
}: NoticeModalProps) => {
  const noticeContentRef = useRef<HTMLDivElement>(null);

  const [isEdit, setIsEdit] = useState(isNew && isManager);

  const { createToast } = useToast();

  const { postNotice } = usePostNoticeMutation();

  const handleCreateNoticeButtonClick = () => {
    const notice = noticeContentRef.current?.innerText;
    if (!notice) {
      createToast({ message: '공지사항을 입력해주세요', toastType: 'error' });
      return;
    }

    postNotice({ clubId, notice });
    onClose();
  };

  const handleEditButtonClick = () => {
    setIsEdit(true);
  };

  const handleEditCompleteButtonClick = () => {
    // console.log(noticeContentRef.current?.innerText); TODO: PUT공지사항 API 호출
    setIsEdit(false);
  };

  const handleDeleteButtonClick = () => {
    //TODO: DELETE공지사항 API 호출
    onClose();
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
          <NoticeTitleStyled>{isNew ? '새 공지를 입력해주세요' : '공지사항'}</NoticeTitleStyled>
          {!isNew && isManager && !isEdit && (
            <NoticeButtonStyled reverse onClick={handleEditButtonClick}>
              수정
            </NoticeButtonStyled>
          )}
          {!isNew && isManager && !isEdit && (
            <NoticeButtonStyled onClick={handleDeleteButtonClick}>삭제</NoticeButtonStyled>
          )}
          {!isNew && isManager && isEdit && (
            <NoticeButtonStyled onClick={handleEditCompleteButtonClick}>
              수정완료
            </NoticeButtonStyled>
          )}
          {isNew && isManager && (
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
