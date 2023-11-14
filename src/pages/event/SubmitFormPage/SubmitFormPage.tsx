import FormItem from '@/components/FormItem/FormItem';
import useEventFormQuery from '@/hooks/query/event/useEventFormQuery';

import { useParams } from 'react-router-dom';

import {
  FormWrapper,
  SubmitButton,
  SubmitFormContainer,
  SubmitFormContent,
  SubmitFormTitle,
} from './SubmitFormPage.style';

const SubmitFormPage = () => {
  const { eventId } = useParams();

  if (!eventId) {
    throw new Error('eventId is null');
  }

  const eventFormData = useEventFormQuery({ eventId });

  return (
    <SubmitFormContainer>
      <SubmitFormTitle>{eventFormData?.event.title}</SubmitFormTitle>
      <SubmitFormContent>{eventFormData?.form.description}</SubmitFormContent>
      <FormWrapper>
        {eventFormData?.form.options.map(({ id, title, type }) => (
          <FormItem id={id} title={title} type={type} />
        ))}
        <SubmitButton>신청 폼 제출하기</SubmitButton>
      </FormWrapper>
    </SubmitFormContainer>
  );
};

export default SubmitFormPage;
