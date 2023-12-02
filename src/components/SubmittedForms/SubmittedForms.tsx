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
  const isPerform = userForms.length !== 0 && userForms[0].ticketCount !== null;

  return (
    <SubmittedFormsContainer>
      <SubmittedFormsWrapper>
        <FormsWrapper>
          <FormLengthStyled>{`제출된 폼: ${formInfo.count}`}</FormLengthStyled>
          <Category
            optionTitles={formInfo.optionTitles}
            managed={formInfo.managed}
            isPerform={isPerform}
          />
          {userForms?.map((form, index) => {
            return (
              <SubmittedForm
                key={form.userId}
                formLength={formInfo.count}
                index={index}
                userId={form.userId}
                options={form.options}
                participation={form.participation}
                ticketCount={form.ticketCount}
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
