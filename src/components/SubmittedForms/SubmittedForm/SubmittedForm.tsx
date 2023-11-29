import FormDetailModal from '@/components/Modals/FormDetailModal/FormDetailModal';
import useModal from '@/hooks/useModal';
import { EventStatus } from '@/types/event';

import FormStatus from '../FormStatus/FormStatus';
import { FormItemStyled, FormRowStyled, FormStyled } from './SubmittedForm.style';

interface SubmittedFormProps {
  index: number;
  formLength: number;
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

const SubmittedForm = ({
  index,
  formLength,
  userId,
  options,
  participation,
  managed,
}: SubmittedFormProps) => {
  const { showModal, modalOpen, modalClose } = useModal();
  const { status, dateTime } = participation;
  const nthForm = formLength - index;

  return (
    <>
      {showModal && <FormDetailModal onClose={modalClose} options={options} nthForm={nthForm} />}
      <FormStyled key={index}>
        <FormItemStyled>{nthForm}</FormItemStyled>
        <FormRowStyled>{dateTime}</FormRowStyled>
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
