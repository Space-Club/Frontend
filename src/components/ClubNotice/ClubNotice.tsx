import useModal from '@/hooks/useModal';

import InfoModal from '../Modals/NoticeModal';
import { ClubNoticeContainer, ClubNoticeTextStyled } from './ClubNotice.style';

interface ClubNoticeProps {
  notice: string;
}

const ClubNotice = ({ notice }: ClubNoticeProps) => {
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && <InfoModal isManager content={notice} onClose={modalClose} />}
      <ClubNoticeContainer onClick={modalOpen}>
        <ClubNoticeTextStyled>{notice}</ClubNoticeTextStyled>
      </ClubNoticeContainer>
    </>
  );
};

export default ClubNotice;
