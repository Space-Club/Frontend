import { FORM_STATUS_DROPDOWN_OPTIONS } from '@/constants/user';
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
  const { formInfo, userForms } = submittedForms;
  const formLength = formInfo.count;
  const appliedState = ['요청', '상태', '취소'];

  return (
    <>
      <FormLengthStyled>{`제출된 폼: ${formLength}`}</FormLengthStyled>
      <SubmittedFormsContainer>
        <FormsWrapper>
          <LineStyled>
            <LineItemStyled>순서</LineItemStyled>
            {formInfo.optionTitles?.map((item) => {
              return <LineItemStyled>{item}</LineItemStyled>;
            })}
            {formInfo.managed &&
              appliedState.map((item) => {
                return <LineItemStyled>{item}</LineItemStyled>;
              })}
          </LineStyled>
          {userForms?.map((form, index) => {
            return (
              <LineStyled>
                <LineItemStyled>{formLength - index}</LineItemStyled>
                {form.options.map((option) => {
                  return <LineItemStyled>{option.content}</LineItemStyled>;
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

const submittedForms = {
  formInfo: {
    count: 10,
    optionTitles: ['이름', '연락처'],
    managed: true,
  },
  userForms: [
    {
      id: 1,
      options: [
        {
          title: '이름',
          content: '박가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 2,
      options: [
        {
          title: '이름',
          content: '김가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'CONFIRMED',
    },
    {
      id: 3,
      options: [
        {
          title: '이름',
          content: '이가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'CANCELED',
    },
    {
      id: 4,
      options: [
        {
          title: '이름',
          content: '최가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'CANCEL_REQUESTED',
    },
    {
      id: 5,
      options: [
        {
          title: '이름',
          content: '송가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 6,
      options: [
        {
          title: '이름',
          content: '황가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 7,
      options: [
        {
          title: '이름',
          content: '권가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 8,
      options: [
        {
          title: '이름',
          content: '정가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 9,
      options: [
        {
          title: '이름',
          content: '그네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
    {
      id: 10,
      options: [
        {
          title: '이름',
          content: '가을이 가네',
        },
        {
          title: '연락처',
          content: '010-1111-2222',
        },
      ],
      applicationStatus: 'PENDING',
    },
  ],
};
