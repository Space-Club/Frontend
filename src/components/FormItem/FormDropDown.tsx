import { Question } from '@/types/forms';

import { useState } from 'react';

import { DropDown, FormDropDownContainer, Option, Select } from './FormDropDown.style';

interface FormDropDown {
  options: string[];
  id: number;
  onAnswer: (value: Question) => void;
}

const FormDropDown = ({ options, id, onAnswer }: FormDropDown) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleOptionClick = (value: string) => {
    setSelectedItem(value);
    setIsDropDown(false);
    onAnswer({
      optionId: id,
      content: value,
    });
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
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </DropDown>
      )}
    </FormDropDownContainer>
  );
};

export default FormDropDown;
