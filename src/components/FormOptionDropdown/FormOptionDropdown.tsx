import { CUSTOM_FORM_OPTIONS, FORM_OPTION } from '@/constants/form';
import useCloseOnOutsideClick from '@/hooks/useCloseOnOutsideClick';
import { useBoundStore } from '@/store/useBoundStore';
import { eventTypeAPI } from '@/types/event';
import { FormOption, FormType } from '@/types/form';
import generateUniqueId from '@/utils/generateUniqueId';

import { MouseEvent as ReactMouseEvent } from 'react';

import {
  CustomDropdownItemWrapper,
  DropdownItemStyled,
  FormOptionDropdownContainer,
} from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  eventType: eventTypeAPI;
}

const FormOptionDropdown = ({ eventType }: FormOptionDropdownProps) => {
  const { appendOption, selectedOptions } = useBoundStore();
  const options = Object.values(FORM_OPTION[eventType]).filter(
    (option) => !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
  );

  const { toggleOpen, isOpen, targetRef } = useCloseOnOutsideClick();
  const { toggleOpen: toggleCustomOpen, isOpen: isCustomOpen } = useCloseOnOutsideClick();

  const handleDropdownItemClick = (option: FormOption) => {
    appendOption(option);
    toggleOpen();
  };

  const handleDropdownCustomClick = () => {
    toggleCustomOpen();
  };
  const handleCustomClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    appendOption({
      id: generateUniqueId(),
      title: '',
      options: [],
      type: event.currentTarget.dataset.type as FormType,
      predefined: false,
    });
    toggleOpen();
    toggleCustomOpen();
  };

  return (
    <FormOptionDropdownContainer ref={targetRef}>
      <DropdownItemStyled onClick={() => toggleOpen()}>+ 추가</DropdownItemStyled>
      {isOpen &&
        options.map((option) => (
          <DropdownItemStyled key={option.title} onClick={() => handleDropdownItemClick(option)}>
            {option.title}
          </DropdownItemStyled>
        ))}
      {isOpen && (
        <DropdownItemStyled onClick={handleDropdownCustomClick}>사용자 지정</DropdownItemStyled>
      )}
      {isCustomOpen && (
        <CustomDropdownItemWrapper>
          {Object.entries(CUSTOM_FORM_OPTIONS).map(([key, value]) => (
            <DropdownItemStyled data-type={key} type={key} onClick={handleCustomClick}>
              {value}
            </DropdownItemStyled>
          ))}
        </CustomDropdownItemWrapper>
      )}
    </FormOptionDropdownContainer>
  );
};

export default FormOptionDropdown;
