import { useBoundStore } from '@/store/useBoundStore';
import { FormOption as FormOptionType } from '@/types/form';

import { FocusEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import {
  FormOptionButton,
  FormOptionContainer,
  FormOptionCustomContentWrapper,
  FormOptionCustomOption,
  FormOptionCustomOptionDisabled,
  FormOptionCustomOptionIndex,
  FormOptionCustomOptionWrapper,
  FormOptionCustomTextareaStyled,
  FormOptionTitleWrapper,
} from './FormOption.style';

interface FormOptionProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  option: FormOptionType;
}

const FormOption = ({ option, ...props }: FormOptionProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const { deleteOption, changeOptionOptions } = useBoundStore();

  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    deleteOption(option);
  };

  const handleAppendOption = () => {
    setOptions((prevState) => {
      const newState = [...prevState];
      newState.push('');
      return newState;
    });
  };
  const handleChangeOption = (event: FocusEvent<HTMLInputElement>, index: number) => {
    setOptions((prevState) => {
      const newState = [...prevState];
      newState[index] = event.target.value;

      changeOptionOptions(option.id, newState);
      return newState;
    });
  };

  return (
    <FormOptionContainer isDisabled={false}>
      <FormOptionTitleWrapper>
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
      </FormOptionTitleWrapper>
      {!['TEXT', 'NUMBER'].includes(option.type) && (
        <FormOptionCustomContentWrapper>
          {options.map((_, index) => (
            <FormOptionCustomOptionWrapper key={index}>
              <FormOptionCustomOptionIndex>{index + 1}.</FormOptionCustomOptionIndex>
              <FormOptionCustomOption
                placeholder="옵션을 입력하세요"
                onBlur={(event) => handleChangeOption(event, index)}
                required
              />
            </FormOptionCustomOptionWrapper>
          ))}
          <FormOptionCustomOptionDisabled onClick={handleAppendOption}>
            + 옵션 추가
          </FormOptionCustomOptionDisabled>
        </FormOptionCustomContentWrapper>
      )}
    </FormOptionContainer>
  );
};

export default FormOption;
