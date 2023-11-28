import FormDetailModal from '@/components/Modals/FormDetailModal/FormDetailModal';
import useModal from '@/hooks/useModal';
import { EventStatus } from '@/types/event';

import FormStatus from '../FormStatus/FormStatus';
import { FormItemStyled, FormRowStyled, FormStyled } from './SubmittedForm.style';

interface SubmittedFormProps {
  index: number;
  userId: string;
  options: {
    title: string;
    content: string;
  }[];
  participation: {
    status: EventStatus;
    dateTime: string;
  };
  managed: boolean;
}

const SubmittedForm = ({ index, userId, options, participation, managed }: SubmittedFormProps) => {
  const { showModal, modalOpen, modalClose } = useModal();
  const { status, dateTime } = participation;

  return (
    <>
      {showModal && <FormDetailModal onClose={modalClose} options={options} dateTime={dateTime} />}
      <FormStyled key={index}>
        <FormRowStyled>{participation.dateTime}</FormRowStyled>
        {options.map((option, index) => (
          <FormItemStyled onClick={modalOpen} key={index}>
            {option.content}
          </FormItemStyled>
        ))}
        {managed && <FormStatus id={userId} participationStatus={status} />}
      </FormStyled>
    </>
  );
};

export default SubmittedForm;
