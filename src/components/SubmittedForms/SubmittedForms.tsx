import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';

import { useParams } from 'react-router-dom';

import Category from './Category/Category';
import SubmittedForm from './SubmittedForm/SubmittedForm';
import {
  FormLengthStyled,
  FormsWrapper,
  SubmittedFormsContainer,
  SubmittedFormsWrapper,
} from './SubmittedForms.style';

const SubmittedForms = () => {
  const { eventId } = useParams() as { eventId: string };
  const { formInfo, userForms } = useGetSubmittedFormsQuery({ eventId });
  if (!formInfo || !userForms) {
    return null;
  }
  //#TODO: 신청받지 않은 form의 경우 데이터가 어떻게 오는지 확인하기

  const sortedUserForms = userForms.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <SubmittedFormsContainer>
      <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
      <SubmittedFormsWrapper>
        <FormsWrapper>
          <Category optionTitles={formInfo.optionTitles} managed={formInfo.managed} />
          {sortedUserForms?.map((form, index) => {
            return (
              <SubmittedForm
                key={form.id}
                index={index}
                formLength={formInfo.count}
                id={form.id}
                options={form.options}
                applicationStatus={form.applicationStatus}
                managed={formInfo.managed}
              />
            );
          })}
        </FormsWrapper>
      </SubmittedFormsWrapper>
    </SubmittedFormsContainer>
  );
};

export default SubmittedForms;
