import { FormOption as FormOptionType } from '@/types/form';

import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';

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
  const [disable, setDisable] = useState(option.title.trim() === '' ? false : true);

  const handleCloseClick = () => {
    onClose(option);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (event.currentTarget.value.trim().length !== 0) {
      setDisable(true);
    }
  };

  return (
    <FormOptionContainer isDisabled={false}>
      <FormOptionCustomTextareaStyled
        autoFocus={!disable}
        maxLength={500}
        defaultValue={option.title}
        disabled={disable}
        onBlur={handleBlur}
        placeholder="제목을 입력하세요"
        {...props}
      />

      {!option.predefined &&
        (disable ? (
          <FormOptionButton onClick={() => setDisable(false)}>
            <FiEdit2 size={20} />
          </FormOptionButton>
        ) : (
          <FormOptionButton onClick={() => setDisable(true)}>
            <FaRegCheckCircle size={20} />
          </FormOptionButton>
        ))}
      <FormOptionButton onClick={handleCloseClick}>
        <AiOutlineClose size={20} />
      </FormOptionButton>
    </FormOptionContainer>
  );
};

export default FormOption;
