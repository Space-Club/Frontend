import { MODAL_TEXT } from '@/constants/modalMessage';
import { PATH } from '@/constants/path';
import { FormOptionContext } from '@/context/FormOptionContext';
import usePostFormOptionMutation from '@/hooks/query/form/usePostFormOptionMutation';
import useModal from '@/hooks/useModal';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmModal from '../Modals/ConfirmModal';
import {
  FormOptionButtonStyled,
  FormOptionButtonsContainer,
  FormSkipButtonStyled,
} from './FormOptionButtons.style';

interface FormOptionButtonProps {
  eventId: string;
}

const FormOptionButtons = ({ eventId }: FormOptionButtonProps) => {
  const { selectedOptions, description, isManaged, validateOptionTitle } =
    useContext(FormOptionContext);
  const { postOption } = usePostFormOptionMutation({ eventId });
  const { showModal, modalClose, modalOpen } = useModal();
  const navigate = useNavigate();
  const isEmpty = selectedOptions.length === 0;

  const handleFormOptionButtonClick = () => {
    if (validateOptionTitle()) {
      postOption({
        eventId,
        description,
        managed: isManaged,
        options: selectedOptions,
      });
    }
  };

  const handleSkipButtonClick = () => {
    modalOpen();
  };

  const onModalConfirm = () => {
    modalClose();
    navigate(PATH.EVENT.DETAIL(eventId));
  };

  return (
    <FormOptionButtonsContainer>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.FORM_OPTION_SKIP_CONFIRM}
          onConfirm={onModalConfirm}
          onClose={modalClose}
        />
      )}
      <FormSkipButtonStyled isEmpty={isEmpty} onClick={handleSkipButtonClick}>
        건너뛰기
      </FormSkipButtonStyled>
      <FormOptionButtonStyled
        isEmpty={isEmpty}
        disabled={isEmpty}
        onClick={handleFormOptionButtonClick}
      >
        폼 추가하기
      </FormOptionButtonStyled>
    </FormOptionButtonsContainer>
  );
};

export default FormOptionButtons;
