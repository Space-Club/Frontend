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
      <SubmittedFormsWrapper>
        <FormsWrapper>
          <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
          <Category optionTitles={formInfo.optionTitles} managed={formInfo.managed} />
          {userForms?.map((form, index) => {
            return (
              <SubmittedForm
                key={form.userId}
                index={index}
                userId={form.userId}
                options={form.options}
                participation={form.participation}
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
