import { FormOption as FormOptionType } from '@/types/form';

import { AiOutlineClose } from 'react-icons/ai';

import {
  FormOptionButton,
  FormOptionContainer,
  FormOptionCustomTextareaStyled,
} from './FormOption.style';

interface FormOptionProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  option: FormOptionType;
  onClose: (option: FormOptionType) => void;
}

const FormOption = ({ option, onClose, ...props }: FormOptionProps) => {
  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onClose(option);
  };

  return (
    <FormOptionContainer isDisabled={false}>
      <FormOptionCustomTextareaStyled
        maxLength={500}
        defaultValue={option.title}
        disabled={option.predefined}
        placeholder="제목을 입력하세요"
        {...props}
      />

      <FormOptionButton onClick={handleCloseClick}>
        <AiOutlineClose size={20} />
      </FormOptionButton>
    </FormOptionContainer>
  );
};

export default FormOption;
