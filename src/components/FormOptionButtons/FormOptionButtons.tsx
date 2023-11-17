import { MODAL_TEXT } from '@/constants/modalMessage';
import { PATH } from '@/constants/path';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import { FormOptionContext } from '@/context/FormOptionContext';
import usePostFormOptionMutation from '@/hooks/query/form/usePostFormOptionMutation';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';

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
  const { selectedOptions, description, isManaged } = useContext(FormOptionContext);
  const { postOption } = usePostFormOptionMutation({ eventId });
  const { showModal, modalClose } = useModal();
  const { createToast } = useToast();
  const navigate = useNavigate();

  const handleFormOptionButtonClick = () => {
    postOption({
      eventId,
      description,
      managed: isManaged,
      options: selectedOptions,
    });
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
    <FormOptionButtonsContainer>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.FORM_OPTION_SKIP_CONFIRM}
          confirmLabel={'폼 추가하기'}
          onConfirm={onModalConfirm}
          onClose={modalClose}
        />
      )}
      <FormSkipButtonStyled>건너뛰기</FormSkipButtonStyled>
      <FormOptionButtonStyled onClick={handleFormOptionButtonClick}>
        폼 추가하기
      </FormOptionButtonStyled>
    </FormOptionButtonsContainer>
  );
};

export default FormOptionButtons;
