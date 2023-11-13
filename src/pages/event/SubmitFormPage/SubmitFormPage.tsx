import FormItem from '@/components/FormItem/FormItem';

import {
  FormWrapper,
  SubmitButton,
  SubmitFormContainer,
  SubmitFormContent,
  SubmitFormTitle,
} from './SubmitFormPage.style';

const SubmitFormPage = () => {
  const mockData = {
    event: {
      title: '행사 제목',
    },
    form: {
      description: '폼 정보',
      options: [
        {
          id: 1,
          title: '이름',
          type: 'TEXT',
        },
        {
          id: 2,
          title: '연락처',
          type: 'TEXT',
        },
      ],
    },
  };
  const mbti = [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
  ];
  const sex = ['남자', '여자'];

  return (
    <SubmitFormContainer>
      <SubmitFormTitle>{mockData.event.title}</SubmitFormTitle>
      <SubmitFormContent>{mockData.form.description}</SubmitFormContent>
      <FormWrapper>
        {mockData.form.options.map(({ id, title, type }) => (
          <FormItem id={id} title={title} type={type as 'TEXT'} />
        ))}
        <FormItem id={3} title="MBTI" type="SELECT" options={mbti} />
        <FormItem id={4} title="성별" type="RADIO" options={sex} />
        <SubmitButton>신청 폼 제출하기</SubmitButton>
      </FormWrapper>
    </SubmitFormContainer>
  );
};

export default SubmitFormPage;
