import FormItem from '@/components/FormItem/FormItem';
import useEventApplyMutation from '@/hooks/query/event/useEventApplyMutation';
import useEventFormQuery from '@/hooks/query/event/useEventFormQuery';
import { Question } from '@/types/event';

import { MouseEvent, useState } from 'react';
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
  const [forms, setForms] = useState<Question[]>([]);
  const { applyEvent } = useEventApplyMutation();

  if (!eventId) {
    throw new Error('eventId is null');
  }

  const eventFormData = useEventFormQuery({ eventId });
  const handleAnswer = (question: Question) => {
    setForms([...forms, question]);
  };

  const handleSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      eventId,
      forms,
    };
    console.log(data);
    applyEvent(data);
  };

  return (
    <SubmitFormContainer>
      <SubmitFormTitle>{eventFormData?.event.title}</SubmitFormTitle>
      <SubmitFormContent>{eventFormData?.form.description}</SubmitFormContent>
      <FormWrapper>
        {eventFormData?.form.options.map(({ id, title, type }) => (
          <FormItem id={id} title={title} type={type} onAnswer={handleAnswer} />
        ))}
        <SubmitButton onClick={handleSubmitForm}>신청 폼 제출하기</SubmitButton>
      </FormWrapper>
    </SubmitFormContainer>
  );
};

export default SubmitFormPage;
