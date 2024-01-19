import { FORM_OPTION } from '@/constants/form';
import { FormOptionContext } from '@/context/FormOptionContext';
import useCloseOnOutsideClick from '@/hooks/useCloseOnOutsideClick';
import { eventTypeAPI } from '@/types/event';
import { FormOption } from '@/types/form';
import generateUniqueId from '@/utils/generateUniqueId';

import { useRef } from 'react';
import { useContext } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  eventType: eventTypeAPI;
}

const FormOptionDropdown = ({ eventType }: FormOptionDropdownProps) => {
  const { appendOption, selectedOptions } = useContext(FormOptionContext);
  const options = Object.values(FORM_OPTION[eventType]).filter(
    (option) => !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
  );

  const { toggleOpen, setIsOpen, isOpen } = useCloseOnOutsideClick();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownItemClick = (option: FormOption) => {
    appendOption(option);
    toggleOpen();
  };

  const handleDropdownCustomClick = () => {
    appendOption({
      id: generateUniqueId(),
      title: '',
      type: 'TEXT',
      predefined: false,
    });
    toggleOpen();
  };

  return (
    <FormOptionDropdownContainer ref={dropdownRef}>
      <DropdownItemStyled onClick={() => setIsOpen(true)}>+ 추가</DropdownItemStyled>
      {isOpen &&
        options.map((option) => (
          <DropdownItemStyled key={option.title} onClick={() => handleDropdownItemClick(option)}>
            {option.title}
          </DropdownItemStyled>
        ))}
      {isOpen && (
        <DropdownItemStyled onClick={handleDropdownCustomClick}>사용자 지정</DropdownItemStyled>
      )}
    </FormOptionDropdownContainer>
  );
};

export default FormOptionDropdown;
