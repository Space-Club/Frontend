import { FormOption } from '@/types/event';

import { useEffect, useRef, useState } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  options: FormOption[];
  handleChange: (option: FormOption) => void;
  handleCustom: () => void;
}

const FormOptionDropdown = ({ options, handleChange, handleCustom }: FormOptionDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

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
    handleChange(option);
    toggleDropdown();
  };

  const handleDropdownCustomClick = () => {
    handleCustom();
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
