import { FormItemContainer, QuestionStyled } from '@/components/FormItem/FormItem.style';

import { BackgroundOverlay } from '../Modal.style';
import Portal from '../Portal';
import { FormDetailModalContainer, SubmittedFormDetailTitleStyled } from './FormDetailModal.style';

interface FormDetailModalProps {
  onClose: () => void;
  options: { title: string; content: string }[];
  nthForm: number;
}

const FormDetailModal = ({ onClose, options, nthForm }: FormDetailModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose}>
        <FormDetailModalContainer>
          <SubmittedFormDetailTitleStyled>{`${nthForm}번째 폼`}</SubmittedFormDetailTitleStyled>
          {options.map((option, index) => {
            return (
              <FormItemContainer key={index}>
                <QuestionStyled>{option.title}</QuestionStyled>
                <div>{option.content}</div>
              </FormItemContainer>
            );
          })}
        </FormDetailModalContainer>
      </BackgroundOverlay>
    </Portal>
  );
};

export default FormDetailModal;
