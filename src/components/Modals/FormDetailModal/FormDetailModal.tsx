import { FormItemContainer, QuestionStyled } from '@/components/FormItem/FormItem.style';

import { BackgroundOverlay } from '../Modal.style';
import Portal from '../Portal';
import { FormDetailModalContainer } from './FormDetailModal.style';

interface FormDetailModalProps {
  onClose: () => void;
  options: { title: string; content: string }[];
}

const FormDetailModal = ({ onClose, options }: FormDetailModalProps) => {
  //#TODO: api response로 제출된 시각 추가해주면 상단에 넣기
  return (
    <Portal>
      <BackgroundOverlay onClick={onClose}>
        <FormDetailModalContainer>
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
