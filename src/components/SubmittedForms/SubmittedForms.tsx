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
  return (
    <SubmittedFormsContainer>
      <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
      <SubmittedFormsWrapper>
        <FormsWrapper>
          <Category optionTitles={formInfo.optionTitles} managed={formInfo.managed} />
          {userForms?.map((form, index) => {
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
