import FormOptionDropdown from '@/components/FormOptionDropdown/FormOptionDropdown';
import FormOptions from '@/components/FormOptions/FormOptions';
import { FORM_OPTION } from '@/constants/form';
import { FormOptionContext } from '@/context/FormOptionContext';
import { EventType } from '@/types/event';

import { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const WriteEventFormPage = () => {
  const location = useLocation();

  const { clubId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const event = queryParams.get('event');

  if (!event) throw new Error('event가 없습니다.');
  if (!clubId) throw new Error('clubId가 없습니다.');

  const { setSelectedOptions, selectedOptions } = useContext(FormOptionContext);

  return (
    <>
      <FormOptions />
      <FormOptionDropdown
        options={Object.values(FORM_OPTION[event as EventType]).filter(
          (option) =>
            !selectedOptions.find((selectedOption) => selectedOption.title === option.title),
        )}
        handleChange={(option) => setSelectedOptions((prev) => [...prev, option])}
        handleCustom={() => {}}
      ></FormOptionDropdown>
    </>
  );
};

export default WriteEventFormPage;
