import FormOption from '@/components/FormOption/FormOption';
import FormOptionDropdown from '@/components/FormOptionDropdown/FormOptionDropdown';
import { FORM_OPTION } from '@/constants/form';
import { FormOptionContext } from '@/context/FormOptionContext';
import { EventType } from '@/types/event';

import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const WriteEventFormPage = () => {
  const { eventType } = useParams();

  const { setSelectedOptions, selectedOptions } = useContext(FormOptionContext);

  if (!eventType) throw new Error('eventType이 없습니다.');

  return (
    <>
      {selectedOptions.map((option) => (
        <FormOption
          option={option}
          handleClose={(option) => {
            setSelectedOptions(
              selectedOptions.filter((selectedOption) => selectedOption.title !== option.title),
            );
          }}
        />
      ))}
      <FormOptionDropdown
        options={Object.values(FORM_OPTION[eventType as EventType]).filter(
          (option) =>
            !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
        )}
        handleChange={(option) => setSelectedOptions((prev) => [...prev, option])}
      ></FormOptionDropdown>
    </>
  );
};

export default WriteEventFormPage;
