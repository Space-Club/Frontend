import { FORM_OPTION } from '@/constants/form';
import { FormOptionContext } from '@/context/FormOptionContext';
import { eventTypeAPI } from '@/types/event';
import { FormOption } from '@/types/form';
import generateUniqueId from '@/utils/generateUniqueId';

import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  eventType: eventTypeAPI;
}

const FormOptionDropdown = ({ eventType }: FormOptionDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { appendOption, selectedOptions } = useContext(FormOptionContext);
  const options = Object.values(FORM_OPTION[eventType]).filter(
    (option) => !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownItemClick = (option: FormOption) => {
    appendOption(option);
    toggleDropdown();
  };

  const handleDropdownCustomClick = () => {
    appendOption({
      id: generateUniqueId(),
      title: '',
      type: 'TEXT',
      predefined: false,
    });
    toggleDropdown();
  };

  return (
    <FormOptionDropdownContainer ref={dropdownRef}>
      <DropdownItemStyled onClick={toggleDropdown}>+ 추가</DropdownItemStyled>
      {showDropdown &&
        options.map((option) => (
          <DropdownItemStyled key={option.title} onClick={() => handleDropdownItemClick(option)}>
            {option.title}
          </DropdownItemStyled>
        ))}
      {showDropdown && (
        <DropdownItemStyled onClick={handleDropdownCustomClick}>사용자 지정</DropdownItemStyled>
      )}
    </FormOptionDropdownContainer>
  );
};

export default FormOptionDropdown;
