import { FORM_OPTION } from '@/constants/form';
import { FormOptionContext } from '@/context/FormOptionContext';
import { FormOption } from '@/types/event';
import { EventType } from '@/types/event';

import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  eventType: EventType;
}

const FormOptionDropdown = ({ eventType }: FormOptionDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setSelectedOptions, selectedOptions } = useContext(FormOptionContext);

  const options = Object.values(FORM_OPTION[eventType]).filter(
    (option) => !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

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

  const handleDropdownItemClick = (option: FormOption) => {
    setSelectedOptions((prev) => [...prev, option]);
    toggleDropdown();
  };

  const handleDropdownCustomClick = () => {
    toggleDropdown();
  };

  return (
    <FormOptionDropdownContainer ref={dropdownRef}>
      <DropdownItemStyled onClick={toggleDropdown}>+ 추가</DropdownItemStyled>
      {showDropdown &&
        options.map((option) => (
          <DropdownItemStyled onClick={() => handleDropdownItemClick(option)}>
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
