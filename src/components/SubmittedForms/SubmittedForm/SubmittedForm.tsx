import FormDetailModal from '@/components/Modals/FormDetailModal/FormDetailModal';
import useModal from '@/hooks/useModal';

import FormStatus from '../FormStatus/FormStatus';
import { FormItemStyled, FormRowStyled, FormStyled } from './SubmittedForm.style';

interface SubmittedFormProps {
  index: number;
  userId: string;
  formLength: number;
  options: {
    title: string;
    content: string;
  }[];
  applicationStatus: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'CANCEL_REQUESTED';
  managed: boolean;
}

const SubmittedForm = ({
  index,
  userId,
  formLength,
  options,
  applicationStatus,
  managed,
}: SubmittedFormProps) => {
  const { showModal, modalOpen, modalClose } = useModal();
  //#TODO: 제출된 시각 추가되면 넣기

  return (
    <>
      {showModal && <FormDetailModal onClose={modalClose} options={options} />}
      <FormStyled key={index} onClick={modalOpen}>
        <FormRowStyled>{formLength - index}</FormRowStyled>
        {options.map((option, index) => {
          return <FormItemStyled key={index}>{option.content}</FormItemStyled>;
        })}
        {managed && <FormStatus id={userId} applicationStatus={applicationStatus} />}
      </FormStyled>
    </>
  );
};

export default SubmittedForm;
