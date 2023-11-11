import useModal from '@/hooks/useModal';

import InfoModal from '../Modals/NoticeModal';
import { ClubNoticeContainer, ClubNoticeTextStyled } from './ClubNotice.style';

interface ClubNoticeProps {
  noticeId: string;
  notice: string;
}

const ClubNotice = ({ notice, noticeId }: ClubNoticeProps) => {
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && (
        <InfoModal
          noticeId={noticeId}
          clubId={noticeId}
          isManager
          content={notice}
          onClose={modalClose}
        />
      )}
      <ClubNoticeContainer onClick={modalOpen}>
        <ClubNoticeTextStyled>{notice}</ClubNoticeTextStyled>
      </ClubNoticeContainer>
    </>
  );
};

export default ClubNotice;
