import { FORM_OPTION } from '@/constants/form';
import useCloseOnOutsideClick from '@/hooks/useCloseOnOutsideClick';
import { useBoundStore } from '@/store/useBoundStore';
import { eventTypeAPI } from '@/types/event';
import { FormOption } from '@/types/form';
import generateUniqueId from '@/utils/generateUniqueId';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  eventType: eventTypeAPI;
}

const FormOptionDropdown = ({ eventType }: FormOptionDropdownProps) => {
  const { appendOption, selectedOptions } = useBoundStore();
  const options = Object.values(FORM_OPTION[eventType]).filter(
    (option) => !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
  );

  const { toggleOpen, isOpen, targetRef } = useCloseOnOutsideClick();

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
    </FormOptionDropdownContainer>
  );
};

export default FormOptionDropdown;
