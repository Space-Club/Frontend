import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';

import Category from './Category';
import { FormLengthStyled, FormsWrapper, SubmittedFormsContainer } from './FormCategory.style';
import SubmittedForm from './SubmittedForm';

const FormCategory = () => {
  const { formInfo, userForms } = useGetSubmittedFormsQuery({ eventId: 1 });
  if (!formInfo || !userForms) {
    return <div>제출된 폼 정보 받아오기 실패</div>;
  }

  return (
    <>
      <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
      <SubmittedFormsContainer>
        <FormsWrapper>
          <Category optionTitles={formInfo.optionTitles} managed={formInfo.managed} />
          {userForms?.map((form, index) => {
            return (
              <SubmittedForm
                key={index}
                index={index}
                id={form.id}
                options={form.options}
                applicationStatus={form.applicationStatus}
                managed={formInfo.managed}
              />
            );
          })}
        </FormsWrapper>
      </SubmittedFormsContainer>
    </>
  );
};

export default FormCategory;
