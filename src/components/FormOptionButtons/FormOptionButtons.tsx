import { FORM_OPTION_BUTTON_TEXT } from '@/constants/form';
import { MODAL_TEXT } from '@/constants/modalMessage';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import { FormOptionContext } from '@/context/FormOptionContext';
import usePostFormOptionMutation from '@/hooks/query/form/usePostFormOptionMutation';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { EventType } from '@/types/event';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmModal from '../Modals/ConfirmModal';
import { FormOptionButtonStyled } from './FormOptionButtons.style';

interface FormOptionButtonProps {
  eventId: string;
  eventType: EventType;
}

const FormOptionButton = ({ eventId, eventType }: FormOptionButtonProps) => {
  const { selectedOptions, description, isManaged, isSkip } = useContext(FormOptionContext);
  const { postOption } = usePostFormOptionMutation({ eventId });
  const { showModal, modalClose, modalOpen } = useModal();
  const { createToast } = useToast();
  const navigate = useNavigate();

  const handleFormOptionButtonClick = () => {
    if (isSkip) {
      modalOpen();
      return;
    } else {
      postOption({
        eventId,
        description,
        managed: isManaged,
        options: selectedOptions,
      });
    }
  };

  const onModalConfirm = () => {
    modalClose();
    createToast({
      message: SUCCESS_MESSAGE.FORM.POST_OPTION,
      toastType: 'success',
    });
    navigate(PATH.EVENT.DETAIL(eventId));
  };

  return (
    <>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.FORM_OPTION_SKIP_CONFIRM}
          confirmLabel={FORM_OPTION_BUTTON_TEXT[eventType]}
          onConfirm={onModalConfirm}
          onClose={modalClose}
        />
      )}
      <FormOptionButtonStyled onClick={handleFormOptionButtonClick}>
        {FORM_OPTION_BUTTON_TEXT[eventType]}
      </FormOptionButtonStyled>
    </>
  );
};

export default FormOptionButton;
