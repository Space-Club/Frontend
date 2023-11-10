import useModal from '@/hooks/useModal';

import InfoModal from '../Modals/NoticeModal';
import { ClubNoticeContainer, ClubNoticeTextStyled } from './ClubNotice.style';

interface ClubNoticeProps {
  clubId: string;
}

const ClubNotice = ({ clubId }: ClubNoticeProps) => {
  const clubNotice = //TODO: 실제 클럽 공지사항으로 변경하기
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, libero qui temporibus officiis vel amet veniam aspernatur consectetur quam aliquam sunt pariatur, debitis eum excepturi vero molestiae cum enim ipsa.';

  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && <InfoModal isManager content={clubNotice} onClose={modalClose} />}
      <ClubNoticeContainer onClick={modalOpen}>
        <ClubNoticeTextStyled>
          {clubNotice}
          {clubId}-임시로 넣었습니다
        </ClubNoticeTextStyled>
      </ClubNoticeContainer>
    </>
  );
};

export default ClubNotice;
