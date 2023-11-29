import { FormOptionContext } from '@/context/FormOptionContext';
import { FormOption as FormOptionType } from '@/types/form';

import React, { useContext } from 'react';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, deleteOption, changeOptionTitle } = useContext(FormOptionContext);

  const handleOptionTitleChange = (
    option: FormOptionType,
    event: React.FormEvent<HTMLTextAreaElement>,
  ) => {
    changeOptionTitle(option, event.currentTarget.value);
    console.log(option);
  };

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.id}
          option={option}
          onClose={deleteOption}
          onChange={(event) => handleOptionTitleChange(option, event)}
        />
      ))}
    </>
  );
};
export default FormOptions;
