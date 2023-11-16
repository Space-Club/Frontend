import { DropDownOption } from '@/components/common/DropDown/DropDown';
import { FormOption, FormOptionButtonText } from '@/types/form';

const FORM_STATUS_DROPDOWN_OPTIONS: DropDownOption[] = [
  { value: 'SELECT', label: '선택' },
  { value: 'CONFIRM', label: '확인' },
];

const NAME: FormOption = {
  id: 'name',
  title: '이름',
  type: 'TEXT',
  visible: true,
} as const;
const PHONE_NUMBER: FormOption = {
  id: 'phoneNumber',
  title: '연락처',
  type: 'TEXT',
  visible: true,
} as const;
const DEPOSITOR: FormOption = {
  id: 'depositor',
  title: '입금자명',
  type: 'TEXT',
  visible: true,
} as const;
const NUMBER_OF_PEOPLE: FormOption = {
  id: 'numberOfPeople',
  title: '인원 수',
  type: 'NUMBER',
  visible: true,
} as const;
const AGE: FormOption = {
  id: 'age',
  title: '나이',
  type: 'NUMBER',
  visible: true,
} as const;
const GENDER: FormOption = {
  id: 'gender',
  title: '성별',
  type: 'RADIO',
  visible: true,
} as const;
const MAJOR: FormOption = {
  id: 'major',
  title: '학교/과',
  type: 'TEXT',
  visible: true,
} as const;
const MBTI: FormOption = {
  id: 'mbti',
  title: 'MBTI',
  type: 'SELECT',
  visible: true,
} as const;
const INTRODUCE: FormOption = {
  id: 'introduce',
  title: '자기소개',
  type: 'TEXT',
  visible: false,
} as const;
const MOTIVATION: FormOption = {
  id: 'motivation',
  title: '지원동기',
  type: 'TEXT',
  visible: false,
} as const;

const PERFORMANCE_FORM_OPTION = {
  NAME,
  PHONE_NUMBER,
  NUMBER_OF_PEOPLE,
  DEPOSITOR,
};

const PROMOTION_FORM_OPTION = {
  NAME,
  PHONE_NUMBER,
};

const RECRUITMENT_FORM_OPTION = {
  NAME,
  PHONE_NUMBER,
  AGE,
  GENDER,
  MAJOR,
  MBTI,
  INTRODUCE,
  MOTIVATION,
};

const CLUB_SCHEDULE_FORM_OPTION = {
  NAME,
  PHONE_NUMBER,
};

const FORM_OPTION = {
  performance: PERFORMANCE_FORM_OPTION,
  promotion: PROMOTION_FORM_OPTION,
  recruitment: RECRUITMENT_FORM_OPTION,
  clubSchedule: CLUB_SCHEDULE_FORM_OPTION,
  defaultOption: {
    NAME,
    PHONE_NUMBER,
  },
};

const FORM_OPTION_BUTTON_TEXT: FormOptionButtonText = {
  performance: '공연 생성하기',
  promotion: '행사 생성하기',
  recruitment: '모집공고 올리기',
  clubSchedule: '일정 등록하기',
};
const SUBMIT_FORM_OPTIONS = {
  MBTI: [
    'ENFJ',
    'ENFP',
    'ENTJ',
    'ENTP',
    'ESFJ',
    'ESFP',
    'ESTJ',
    'ESTP',
    'INFJ',
    'INFP',
    'INTJ',
    'INTP',
    'ISFJ',
    'ISFP',
    'ISTJ',
    'ISTP',
  ],
  GENDER: ['남', '여'],
};

export {
  PERFORMANCE_FORM_OPTION,
  PROMOTION_FORM_OPTION,
  RECRUITMENT_FORM_OPTION,
  CLUB_SCHEDULE_FORM_OPTION,
  FORM_OPTION,
  FORM_OPTION_BUTTON_TEXT,
  FORM_STATUS_DROPDOWN_OPTIONS,
  SUBMIT_FORM_OPTIONS,
};
