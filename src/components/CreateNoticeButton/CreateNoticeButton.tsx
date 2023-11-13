import useModal from '@/hooks/useModal';
import Theme from '@/styles/Theme';

import { AiFillPlusCircle } from 'react-icons/ai';

import NoticeModal from '../Modals/NoticeModal';
import { CreateButtonStyled } from './CreateNoticeButton.style';

interface CreateNoticeButtonProps {
  clubId: string;
}

const CreateNoticeButton = ({ clubId }: CreateNoticeButtonProps) => {
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && <NoticeModal clubId={clubId} onClose={modalClose} isNew isManager />}
      <CreateButtonStyled onClick={modalOpen}>
        <AiFillPlusCircle size={20} color={Theme.color.tWhiteGrey} />
      </CreateButtonStyled>
    </>
  );
};

export default CreateNoticeButton;
