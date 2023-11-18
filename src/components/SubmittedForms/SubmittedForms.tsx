import { FormInfo, UserForm } from '@/types/forms';

import Category from './Category/Category';
import SubmittedForm from './SubmittedForm/SubmittedForm';
import {
  FormLengthStyled,
  FormsWrapper,
  SubmittedFormsContainer,
  SubmittedFormsWrapper,
} from './SubmittedForms.style';

const SubmittedForms = ({ formInfo, userForms }: { formInfo: FormInfo; userForms: UserForm[] }) => {
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
