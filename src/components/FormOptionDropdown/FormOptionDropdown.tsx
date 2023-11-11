import { FormOption } from '@/types/event';

import { useState } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  options: FormOption[];
  handleChange: (option: FormOption) => void;
  handleCustom: () => void;
}

const FormOptionDropdown = ({ options, handleChange, handleCustom }: FormOptionDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleDropdownItemClick = (option: FormOption) => {
    handleChange(option);
    toggleDropdown();
  };

  const handleDropdownCustomClick = () => {
    handleCustom();
    toggleDropdown();
  };

  return (
    <FormOptionDropdownContainer>
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
