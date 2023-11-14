import FormStatus from '../FormStatus/FormStatus';
import { FormItemStyled, FormRowStyled, FormStyled } from './SubmittedForm.style';

interface SubmittedFormProps {
  index: number;
  id: number;
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
  id,
  formLength,
  options,
  applicationStatus,
  managed,
}: SubmittedFormProps) => {
  return (
    <FormStyled key={index}>
      <FormRowStyled>{formLength - index}</FormRowStyled>
      {options.map((option, index) => {
        return <FormItemStyled key={index}>{option.content}</FormItemStyled>;
      })}
      {managed && <FormStatus id={id} applicationStatus={applicationStatus} />}
    </FormStyled>
  );
};

export default SubmittedForm;
