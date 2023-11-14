import { FORM_STATUS_DROPDOWN_OPTIONS } from '@/constants/user';
import useGetSubmittedFormsQuery from '@/hooks/query/event/useGetSubmittedFormsQuery';
import { getEventStatusTag } from '@/utils/getEventStatusTag';

import ApplyCancelButton from '../ApplyCancelButton/ApplyCancelButton';
import DropDown from '../common/DropDown/DropDown';
import {
  FormLengthStyled,
  FormsWrapper,
  LineItemStyled,
  LineStyled,
  SubmittedFormsContainer,
} from './FormCategory.style';

const FormCategory = () => {
  const { formInfo, userForms } = useGetSubmittedFormsQuery({ eventId: 1 });
  if (!formInfo || !userForms) {
    return <div>제출된 폼 정보 받아오기 실패</div>;
  }

  const formLength = formInfo.count;
  const appliedState = ['요청', '상태', '취소'];

  return (
    <>
      <FormLengthStyled>{`제출된 폼: ${formLength}`}</FormLengthStyled>
      <SubmittedFormsContainer>
        <FormsWrapper>
          <LineStyled>
            <LineItemStyled>순서</LineItemStyled>
            {formInfo.optionsTitles?.map((item, index) => {
              return <LineItemStyled key={index}>{item}</LineItemStyled>;
            })}
            {formInfo.managed &&
              appliedState.map((item, index) => {
                return <LineItemStyled key={index}>{item}</LineItemStyled>;
              })}
          </LineStyled>
          {userForms?.map((form, index) => {
            return (
              <LineStyled key={index}>
                <LineItemStyled>{form.id}</LineItemStyled>
                {form.options.map((option, index) => {
                  return <LineItemStyled key={index}>{option.content}</LineItemStyled>;
                })}
                {formInfo.managed && (
                  <>
                    <LineItemStyled>{getEventStatusTag(form.applicationStatus)}</LineItemStyled>
                    <LineItemStyled>
                      <DropDown
                        options={FORM_STATUS_DROPDOWN_OPTIONS}
                        selectedValue={
                          form.applicationStatus === 'PENDING'
                            ? 'SELECT'
                            : form.applicationStatus === 'CONFIRM'
                            ? 'CONFIRM'
                            : 'SELECT'
                        }
                      />
                    </LineItemStyled>
                    <LineItemStyled>
                      <ApplyCancelButton
                        isCancelled={form.applicationStatus === 'CANCELED' ? true : false}
                      />
                    </LineItemStyled>
                  </>
                )}
              </LineStyled>
            );
          })}
        </FormsWrapper>
      </SubmittedFormsContainer>
    </>
  );
};

export default FormCategory;
