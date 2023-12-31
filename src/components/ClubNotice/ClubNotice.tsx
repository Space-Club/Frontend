import useModal from '@/hooks/useModal';

import InfoModal from '../Modals/NoticeModal';
import { ClubNoticeContainer, ClubNoticeTextStyled } from './ClubNotice.style';

interface ClubNoticeProps {
  noticeId: string;
  clubId: string;
  notice: string;
}

const ClubNotice = ({ notice, noticeId, clubId }: ClubNoticeProps) => {
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && (
        <InfoModal noticeId={noticeId} clubId={clubId} content={notice} onClose={modalClose} />
      )}
      <ClubNoticeContainer onClick={modalOpen}>
        <ClubNoticeTextStyled value={notice} readOnly />
      </ClubNoticeContainer>
    </>
  );
};

export default ClubNotice;
