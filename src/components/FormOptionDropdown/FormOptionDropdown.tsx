import { FormOption } from '@/types/event';

import { useState } from 'react';

import { DropdownItemStyled, FormOptionDropdownContainer } from './FormOptionDropdown.style';

interface FormOptionDropdownProps {
  options: FormOption[];
  handleChange?: (option: FormOption) => void;
}

const FormOptionDropdown = ({ options, handleChange }: FormOptionDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <FormOptionDropdownContainer>
      <DropdownItemStyled onClick={toggleDropdown}>+ 추가</DropdownItemStyled>
      {showDropdown &&
        options.map((option) => (
          <DropdownItemStyled
            onClick={() => {
              handleChange && handleChange(option);
              toggleDropdown();
            }}
          >
            {option.title}
          </DropdownItemStyled>
        ))}
    </FormOptionDropdownContainer>
  );
};

export default FormOptionDropdown;
