import { FormOption as FormOptionType } from '@/types/event';

import { AiOutlineClose } from 'react-icons/ai';

import {
  FormOptionCloseButton,
  FormOptionContainer,
  FormOptionCustomInputStyled,
  FormOptionTitleStyled,
} from './FormOption.style';

interface FormOptionProps {
  option: FormOptionType;
  onClose: (option: FormOptionType) => void;
  onBlur: (option: FormOptionType, title: string) => void;
}

const FormOption = ({ option, onClose, onBlur }: FormOptionProps) => {
  const handleCloseClick = () => {
    onClose(option);
  };

  const handleInputBlur = () => {
    onBlur(option, option.title);
  };

  return (
    <FormOptionContainer>
      {option.title === '' ? (
        <FormOptionCustomInputStyled
          autoFocus={true}
          onBlur={handleInputBlur}
          placeholder="제목을 입력하세요"
        ></FormOptionCustomInputStyled>
      ) : (
        <FormOptionTitleStyled>{option.title}</FormOptionTitleStyled>
      )}
      <FormOptionCloseButton onClick={handleCloseClick}>
        <AiOutlineClose size={15} />
      </FormOptionCloseButton>
    </FormOptionContainer>
  );
};

export default FormOption;
