import useSubmitForm from '@/hooks/query/event/useSubmitForm';
import FormLayout from '@/pages/FormLayout/FormLayout';
import { EventType, eventTypeAPI } from '@/types/event';
import getQueryString from '@/utils/getQueryString';

import { FieldValues, useForm } from 'react-hook-form';
import { useLocation, useParams } from 'react-router-dom';

import NavigateButton from './NavigateButton/NavigateButton';
import SelectEventInfo from './SelectEventInfo/SelectEventInfo';
import { EventFormContainer } from './WriteEventInfoPage.style';

const WriteEventInfoPage = () => {
  const { search, state } = useLocation();
  const eventQuery = getQueryString({ pathString: search, findQuery: 'event' }) as EventType;
  const eventType = eventQuery.toUpperCase() as eventTypeAPI;
  const { clubId } = useParams();

  if (!clubId) {
    throw new Error('해당 클럽 id가 존재하지 않습니다.');
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const infoProps = {
    register,
    setValue,
    watch,
    errors,
    eventDetail: state?.eventDetail,
  };

  const { submitForm, isSubmitLoading } = useSubmitForm({
    eventType,
    clubId,
    isEdit: !!state,
  });

  const onPerformanceSubmitForm = async (data: FieldValues) => {
    if (isSubmitLoading || !clubId) return;
    if (state) {
      submitForm({ data, clubId, eventType, eventId: state.eventId });
    } else {
      submitForm({ data, clubId, eventType });
    }
  };

  return (
    <FormLayout>
      <EventFormContainer onSubmit={handleSubmit(onPerformanceSubmitForm)}>
        <SelectEventInfo eventQuery={eventQuery} {...infoProps} />
        <NavigateButton submitButtonText={state ? '수정' : '다음'} />
      </EventFormContainer>
    </FormLayout>
  );
};

export default WriteEventInfoPage;
