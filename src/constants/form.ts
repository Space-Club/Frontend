import { FormOption } from '@/types/event';

const NAME: FormOption = {
  title: '이름',
  type: 'TEXT',
  visible: true,
} as const;
const PHONE_NUMBER: FormOption = {
  title: '연락처',
  type: 'TEXT',
  visible: true,
} as const;
const DEPOSITOR: FormOption = {
  title: '입금자명',
  type: 'TEXT',
  visible: true,
} as const;
const NUMBER_OF_PEOPLE: FormOption = {
  title: '인원 수',
  type: 'NUMBER',
  visible: true,
} as const;
const AGE: FormOption = {
  title: '나이',
  type: 'NUMBER',
  visible: true,
} as const;
const GENDER: FormOption = {
  title: '성별',
  type: 'RADIO',
  visible: true,
} as const;
const MAJOR: FormOption = {
  title: '학교/과',
  type: 'TEXT',
  visible: true,
} as const;
const MBTI: FormOption = {
  title: 'MBTI',
  type: 'SELECT',
  visible: true,
} as const;
const INTRODUCE: FormOption = {
  title: '자기소개',
  type: 'TEXT',
  visible: false,
} as const;
const MOTIVATION: FormOption = {
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
};

export {
  PERFORMANCE_FORM_OPTION,
  PROMOTION_FORM_OPTION,
  RECRUITMENT_FORM_OPTION,
  CLUB_SCHEDULE_FORM_OPTION,
  FORM_OPTION,
};
