import { FormItemContainer, QuestionStyled } from '@/components/FormItem/FormItem.style';

import { BackgroundOverlay } from '../Modal.style';
import Portal from '../Portal';
import { FormDetailModalContainer, SubmittedFormDetailTitleStyled } from './FormDetailModal.style';

interface FormDetailModalProps {
  onClose: () => void;
  options: { title: string; content: string }[];
  dateTime: string;
}

const FormDetailModal = ({ onClose, options, dateTime }: FormDetailModalProps) => {
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose}>
        <FormDetailModalContainer>
          <SubmittedFormDetailTitleStyled>{`제출시간: ${dateTime}`}</SubmittedFormDetailTitleStyled>
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
