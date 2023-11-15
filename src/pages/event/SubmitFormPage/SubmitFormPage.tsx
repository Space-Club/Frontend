import FormItem from '@/components/FormItem/FormItem';
import SearchInputForm from '@/components/SearchInputForm/SearchInputForm';
import Header from '@/components/common/Header/Header';
import Tab from '@/components/common/Tab/Tab';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { MAIN_TABS } from '@/constants/tab';
import useEventApplyMutation from '@/hooks/query/event/useEventApplyMutation';
import useEventFormQuery from '@/hooks/query/event/useEventFormQuery';
import useToast from '@/hooks/useToast';
import { Question } from '@/types/forms';

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
  const { createToast } = useToast();

  if (!eventId) {
    throw new Error('eventId is null');
  }

  const eventFormData = useEventFormQuery({ eventId });

  const handleAnswer = (question: Question) => {
    const existingQuestionIndex = forms.findIndex((q) => q.optionId === question.optionId);

    if (existingQuestionIndex !== -1) {
      if (question.content === '') {
        setForms((prevForms) => {
          const newForm = prevForms.filter((answer) => answer.optionId !== question.optionId);
          return newForm;
        });
      } else {
        setForms((prevForms) => {
          const newForms = [...prevForms];
          newForms[existingQuestionIndex] = question;
          return newForms;
        });
      }
    } else {
      setForms((prevForms) => [...prevForms, question]);
    }
  };

  const handleSubmitForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (eventFormData?.form.options.length !== forms.length) {
      createToast({ message: ERROR_MESSAGE.FORM, toastType: 'error' });
      return;
    }
    console.log(forms);
    applyEvent({ forms, eventId });
  };

  return (
    <SubmitFormContainer>
      <Header>
        <SearchInputForm />
        <Tab tabItems={MAIN_TABS} />
      </Header>
      <SubmitFormTitle>{eventFormData?.event.title}</SubmitFormTitle>
      <SubmitFormContent>{eventFormData?.form.description}</SubmitFormContent>
      <FormWrapper>
        {eventFormData?.form.options.map(({ id, title, type, option }) => (
          <FormItem id={id} title={title} type={type} options={option} onAnswer={handleAnswer} />
        ))}
        <SubmitButton onClick={handleSubmitForm}>신청 폼 제출하기</SubmitButton>
      </FormWrapper>
    </SubmitFormContainer>
  );
};

export default SubmitFormPage;
