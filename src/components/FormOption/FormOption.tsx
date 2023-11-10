import { FormOption as FormOptionType } from '@/types/event';

import { AiOutlineClose } from 'react-icons/ai';

import {
  FormOptionCloseButton,
  FormOptionContainer,
  FormOptionTitleStyled,
} from './FormOption.style';

interface FormOptionProps {
  option: FormOptionType;
  handleClose?: (option: FormOptionType) => void;
}

const FormOption = ({ option, handleClose }: FormOptionProps) => {
  const handleCloseClick = () => {
    handleClose && handleClose(option);
  };

  return (
    <FormOptionContainer>
      <FormOptionTitleStyled>{option.title}</FormOptionTitleStyled>
      <FormOptionCloseButton
        onClick={() => {
          handleCloseClick();
        }}
      >
        <AiOutlineClose size={15} />
      </FormOptionCloseButton>
    </FormOptionContainer>
  );
};

export default FormOption;
