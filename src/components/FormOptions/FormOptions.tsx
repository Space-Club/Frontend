import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, deleteOption, changeOptionTitle } = useContext(FormOptionContext);

  console.log(selectedOptions);

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.title}
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
