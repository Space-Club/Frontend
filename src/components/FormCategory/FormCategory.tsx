import { MY_EVENTS_TAGS } from '@/constants/event';
import { FORM_STATUS_DROPDOWN_OPTIONS } from '@/constants/user';
import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

import ApplyCancelButton from '../ApplyCancelButton/ApplyCancelButton';
import DropDown from '../common/DropDown/DropDown';
import EventStatusTag from '../common/EventTag/EventTag';

const FormLengthStyled = styled.div`
  color: ${Theme.color.semiBlack};
  font-size: ${Theme.fontSize.smallContent};
  padding-bottom: 0.3rem;
`;

const SubmittedFormsContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
`;

const FormsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50rem;
  width: fit-content;

  &:first-of-type {
    padding-bottom: 0.2rem;
  }
`;

const LineStyled = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${Theme.color.tSeparator};
  font-size: ${Theme.fontSize.smallContent};

  &:first-of-type {
    height: 2.2rem;
    border-top: 2px solid ${Theme.color.textGrey};
    border-bottom: 2px solid ${Theme.color.textGrey};
    font-size: ${Theme.fontSize.largeContent};
  }

  &:not(:first-of-type):hover {
    background-color: ${Theme.color.tWhiteGrey};
  }
`;

const LineItemStyled = styled.div`
  width: 10rem;

  &:first-of-type {
    width: 4rem;
  }
`;

const getEventStatusTag = (status: string) => {
  switch (status) {
    case 'PENDING':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.pending} />;
    case 'CONFIRMED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.confirmed} />;
    case 'CANCELED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.cancelled} />;
    case 'CANCEL_REQUESTED':
      return <EventStatusTag eventTag={MY_EVENTS_TAGS.cancelRequested} />;
    default:
      return null; // 혹은 다른 기본값 처리
  }
};

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
