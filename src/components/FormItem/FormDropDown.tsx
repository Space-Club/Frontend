import { useState } from 'react';

import { DropDown, FormDropDownContainer, Option, Select } from './FormDropDown.style';

interface FormDropDown {
  options: string[];
}

const FormDropDown = ({ options }: FormDropDown) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleOptionClick = (value: string) => {
    setSelectedItem(value);
    setIsDropDown(false);
  };

  const handleSelectClick = () => {
    setIsDropDown((isDropDown) => !isDropDown);
  };

  return (
    <FormDropDownContainer isRounded={isDropDown}>
      <Select onClick={handleSelectClick}>{selectedItem ? selectedItem : '선택'}</Select>
      {isDropDown && (
        <DropDown isRounded={isDropDown}>
          {options.map((option: string) => (
            <Option onClick={() => handleOptionClick(option)}>{option}</Option>
          ))}
        </DropDown>
      )}
    </FormDropDownContainer>
  );
};

export default FormDropDown;
