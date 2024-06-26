import { DropDownOption } from '@/components/common/DropDown/DropDown';
import { FormOption } from '@/types/form';

const FORM_STATUS_DROPDOWN_OPTIONS: DropDownOption[] = [
  { value: 'PENDING', label: '선택' },
  { value: 'CONFIRMED', label: '확인' },
];

const NAME: FormOption = {
  id: 'name',
  title: '이름',
  type: 'TEXT',
  predefined: true,
} as const;
const PHONE_NUMBER: FormOption = {
  id: 'phoneNumber',
  title: '연락처',
  type: 'TEXT',
  predefined: true,
} as const;
const DEPOSITOR: FormOption = {
  id: 'depositor',
  title: '입금자명',
  type: 'TEXT',
  predefined: true,
} as const;
const NUMBER_OF_PEOPLE: FormOption = {
  id: 'numberOfPeople',
  title: '인원 수',
  type: 'NUMBER',
  predefined: true,
} as const;
const AGE: FormOption = {
  id: 'age',
  title: '나이',
  type: 'NUMBER',
  predefined: true,
} as const;
const GENDER: FormOption = {
  id: 'gender',
  title: '성별',
  type: 'RADIO',
  predefined: true,
} as const;
const MAJOR: FormOption = {
  id: 'major',
  title: '학교/과',
  type: 'TEXT',
  predefined: true,
} as const;
const MBTI: FormOption = {
  id: 'mbti',
  title: 'MBTI',
  type: 'SELECT',
  predefined: true,
} as const;
const INTRODUCE: FormOption = {
  id: 'introduce',
  title: '자기소개',
  type: 'TEXT',
  predefined: true,
} as const;
const MOTIVATION: FormOption = {
  id: 'motivation',
  title: '지원동기',
  type: 'TEXT',
  predefined: true,
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
  SHOW: PERFORMANCE_FORM_OPTION,
  PROMOTION: PROMOTION_FORM_OPTION,
  RECRUITMENT: RECRUITMENT_FORM_OPTION,
  CLUB: CLUB_SCHEDULE_FORM_OPTION,
  defaultOption: {
    NAME,
    PHONE_NUMBER,
  },
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

const CUSTOM_FORM_OPTIONS = {
  TEXT: '텍스트',
  NUMBER: '숫자',
  SELECT: '드롭다운',
  RADIO: '단일 선택',
  CHECKBOX: '다중 선택',
};

export {
  PERFORMANCE_FORM_OPTION,
  PROMOTION_FORM_OPTION,
  RECRUITMENT_FORM_OPTION,
  CLUB_SCHEDULE_FORM_OPTION,
  FORM_OPTION,
  FORM_STATUS_DROPDOWN_OPTIONS,
  SUBMIT_FORM_OPTIONS,
  CUSTOM_FORM_OPTIONS,
};
