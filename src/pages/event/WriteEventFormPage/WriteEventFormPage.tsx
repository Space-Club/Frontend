import FormCheckOptions from '@/components/FormCheckOptions/FormCheckOptions';
import FormInformationEditor from '@/components/FormInformationEditor/FormInformationEditor';
import FormOptionButtons from '@/components/FormOptionButtons/FormOptionButtons';
import FormOptionDropdown from '@/components/FormOptionDropdown/FormOptionDropdown';
import FormOptions from '@/components/FormOptions/FormOptions';
import FormLayout from '@/pages/FormLayout/FormLayout';
import { eventTypeAPI } from '@/types/event';

import { useLocation, useParams } from 'react-router-dom';

import { WriteEventPageContainer } from './WriteEventFormPage.style';

const WriteEventFormPage = () => {
  const location = useLocation();

  const { clubId, eventId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event') as eventTypeAPI;

  if (!eventType) throw new Error('event queryString이 잘못 되었습니다');
  if (!clubId) throw new Error('clubId가 없습니다.');
  if (!eventId) throw new Error('eventId가 없습니다');

  return (
    <FormLayout>
      <WriteEventPageContainer>
        <FormCheckOptions />
        <FormInformationEditor />
        <FormOptions />
        <FormOptionDropdown eventType={eventType} />
        <FormOptionButtons eventId={eventId} />
      </WriteEventPageContainer>
    </FormLayout>
  );
};

export default WriteEventFormPage;
