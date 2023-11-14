import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';

import Category from '../SubmittedForms/Category/Category';
import SubmittedForm from '../SubmittedForms/SubmittedForm/SubmittedForm';
import {
  FormLengthStyled,
  FormsWrapper,
  SubmittedFormsContainer,
} from '../SubmittedForms/SubmittedForms.style';

const FormCategory = () => {
  const { formInfo, userForms } = useGetSubmittedFormsQuery({ eventId: 1 });
  if (!formInfo || !userForms) {
    return null;
  }
  //#TODO: 신청받지 않은 form의 경우 데이터가 어떻게 오는지 확인하기

  const sortedUserForms = userForms.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <>
      <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
      <SubmittedFormsContainer>
        <FormsWrapper>
          <Category optionTitles={formInfo.optionTitles} managed={formInfo.managed} />
          {sortedUserForms?.map((form, index) => {
            return (
              <SubmittedForm
                key={index}
                index={index}
                id={form.id}
                options={form.options}
                applicationStatus={form.applicationStatus}
                managed={formInfo.managed}
                formLength={formInfo.count}
              />
            );
          })}
        </FormsWrapper>
      </SubmittedFormsContainer>
    </>
  );
};

export default FormCategory;
