import FormOptionDropdown from '@/components/FormOptionDropdown/FormOptionDropdown';
import FormOptions from '@/components/FormOptions/FormOptions';
import { EventType } from '@/types/event';

import { useLocation, useParams } from 'react-router-dom';

const WriteEventFormPage = () => {
  const location = useLocation();

  const { clubId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event');

  if (!eventType) throw new Error('event가 없습니다.');
  if (!clubId) throw new Error('clubId가 없습니다.');

  return (
    <>
      <FormOptions />
      <FormOptionDropdown eventType={eventType as EventType} />
    </>
  );
};

export default WriteEventFormPage;
