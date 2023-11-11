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

const FormCategory = () => {
  const { data, formCategory, isMode } = submittedForms;
  const formLength = data.length;
  const appliedState = ['요청', '상태', '취소'];

  return (
    <>
      <FormLengthStyled>{`제출된 폼: ${formLength}`}</FormLengthStyled>
      <SubmittedFormsContainer>
        <FormsWrapper>
          <LineStyled>
            <LineItemStyled>순서</LineItemStyled>
            {formCategory?.map((item) => {
              return <LineItemStyled>{item}</LineItemStyled>;
            })}
            {isMode &&
              appliedState.map((item) => {
                return <LineItemStyled>{item}</LineItemStyled>;
              })}
          </LineStyled>
          {data?.map((form, index) => {
            return (
              <LineStyled>
                <LineItemStyled>{formLength - index}</LineItemStyled>
                {form.items.map((item) => {
                  return <LineItemStyled>{item.content}</LineItemStyled>;
                })}
                {isMode && (
                  <>
                    <LineItemStyled>
                      {form.requestStatus === 'none' ? (
                        ''
                      ) : (
                        <EventStatusTag
                          eventTag={
                            form.requestStatus === 'request'
                              ? MY_EVENTS_TAGS.cancelRequested
                              : MY_EVENTS_TAGS.cancelled
                          }
                        />
                      )}
                    </LineItemStyled>
                    <LineItemStyled>
                      <DropDown
                        options={FORM_STATUS_DROPDOWN_OPTIONS}
                        selectedValue={form.managerCheckStatus ? '확인' : '선택'}
                      />
                    </LineItemStyled>
                    <LineItemStyled>
                      <ApplyCancelButton isCancelled={form.cancelStatus} />
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
  data: [
    {
      username: '박씨',
      phoneNumber: '010-1111-2222',
      cancelStatus: true,
      managerCheckStatus: true,
      requestStatus: 'done',
      items: [
        {
          name: '이름',
          content: '박씨',
        },
        {
          name: '연락처',
          content: '010-1111-2222',
        },
        {
          name: '나이',
          content: 27,
        },
        {
          name: '성별',
          content: '여',
        },
        {
          name: 'MBTI',
          content: 'INTJ',
        },
      ],
    },
    {
      username: '김씨',
      phoneNumber: '010-2222-3333',
      cancelStatus: false,
      managerCheckStatus: false,
      requestStatus: 'none',
      items: [
        {
          name: '이름',
          content: '김씨',
        },
        {
          name: '연락처',
          content: '010-2222-3333',
        },
        {
          name: '나이',
          content: 35,
        },
        {
          name: '성별',
          content: '남',
        },
        {
          name: 'MBTI',
          content: 'ENFP',
        },
      ],
    },
    {
      username: '이씨',
      phoneNumber: '010-3333-4444',
      cancelStatus: false,
      managerCheckStatus: true,
      requestStatus: 'request',
      items: [
        {
          name: '이름',
          content: '이씨',
        },
        {
          name: '연락처',
          content: '010-3333-4444',
        },
        {
          name: '나이',
          content: 28,
        },
        {
          name: '성별',
          content: '여',
        },
        {
          name: 'MBTI',
          content: 'ISTP',
        },
      ],
    },
    {
      username: '이씨',
      phoneNumber: '010-3333-4444',
      cancelStatus: false,
      managerCheckStatus: true,
      requestStatus: 'none',
      items: [
        {
          name: '이름',
          content: '이씨',
        },
        {
          name: '연락처',
          content: '010-3333-4444',
        },
        {
          name: '나이',
          content: 28,
        },
        {
          name: '성별',
          content: '여',
        },
        {
          name: 'MBTI',
          content: 'ISTP',
        },
      ],
    },
    {
      username: '이씨',
      phoneNumber: '010-3333-4444',
      cancelStatus: false,
      managerCheckStatus: true,
      requestStatus: 'none',
      items: [
        {
          name: '이름',
          content: '이씨',
        },
        {
          name: '연락처',
          content: '010-3333-4444',
        },
        {
          name: '나이',
          content: 28,
        },
        {
          name: '성별',
          content: '여',
        },
        {
          name: 'MBTI',
          content: 'ISTP',
        },
      ],
    },
  ],
  formCategory: ['이름', '연락처', '나이', '성별', 'MBTI'],
  isMode: true,
};
