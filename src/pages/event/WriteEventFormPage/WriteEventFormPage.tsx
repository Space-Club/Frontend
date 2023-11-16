import FormCheckOptions from '@/components/FormCheckOptions/FormCheckOptions';
import FormInformationEditor from '@/components/FormInformationEditor/FormInformationEditor';
import FormOptionButton from '@/components/FormOptionButton/FormOptionButton';
import FormOptionDropdown from '@/components/FormOptionDropdown/FormOptionDropdown';
import FormOptions from '@/components/FormOptions/FormOptions';
import { EventType } from '@/types/event';

import { useLocation, useParams } from 'react-router-dom';

import { WriteEventPageContainer } from './WriteEventFormPage.style';

const WriteEventFormPage = () => {
  const location = useLocation();

  const { clubId, eventId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event') as EventType;

  if (!eventType) throw new Error('event queryString이 잘못 되었습니다');
  if (!clubId) throw new Error('clubId가 없습니다.');
  if (!eventId) throw new Error('eventId가 없습니다');

  return (
    <WriteEventPageContainer>
      <FormCheckOptions />
      <FormInformationEditor />
      <FormOptions />
      <FormOptionDropdown eventType={eventType} />
      <FormOptionButton eventId={eventId} eventType={eventType} />
    </WriteEventPageContainer>
  );
};

export default WriteEventFormPage;