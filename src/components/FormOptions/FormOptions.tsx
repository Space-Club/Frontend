import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, deleteOption, changeOptionTitle } = useContext(FormOptionContext);

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.title}
          option={option}
          onClose={deleteOption}
          onBlur={changeOptionTitle}
        />
      ))}
    </>
  );
};
export default FormOptions;
