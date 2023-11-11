import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, deleteOption, changeOptionTitle } = useContext(FormOptionContext);

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.id}
          option={option}
          onClose={(option) => {
            deleteOption(option);
          }}
          onBlur={(option, title) => {
            changeOptionTitle(option, title);
          }}
        />
      ))}
    </>
  );
};
export default FormOptions;
