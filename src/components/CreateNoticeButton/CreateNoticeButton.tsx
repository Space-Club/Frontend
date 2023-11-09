import useModal from '@/hooks/useModal';
import Theme from '@/styles/Theme';

import { AiFillPlusCircle } from 'react-icons/ai';

import NoticeModal from '../Modals/NoticeModal';
import { CreateButtonStyled } from './CreateNoticeButton.style';

interface CreateNoticeButtonProps {
  clubId: string;
}

// eslint-disable-next-line
const CreateNoticeButton = ({ clubId }: CreateNoticeButtonProps) => {
  // const { mutate } = useCreateNotice(clubId); TODO: 공지사항 생성 API 연결

  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && <NoticeModal onClose={modalClose} isNew isManager />}
      <CreateButtonStyled onClick={modalOpen}>
        <AiFillPlusCircle size={20} color={Theme.color.tWhiteGrey} />
      </CreateButtonStyled>
    </>
  );
};

export default CreateNoticeButton;
