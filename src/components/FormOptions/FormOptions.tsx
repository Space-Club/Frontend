import { FormOptionContext } from '@/context/FormOptionContext';

import { useContext } from 'react';

import FormOption from '../FormOption/FormOption';

const FormOptions = () => {
  const { selectedOptions, setSelectedOptions } = useContext(FormOptionContext);

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          key={option.title}
          option={option}
          handleClose={(option) => {
            setSelectedOptions(
              selectedOptions.filter((selectedOption) => selectedOption.title !== option.title),
            );
          }}
        />
      ))}
    </>
  );
};
export default FormOptions;
