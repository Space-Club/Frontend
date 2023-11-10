const NAME = {
  title: '이름',
  type: 'TEXT',
  visible: true,
};
const PHONE_NUMBER = {
  title: '연락처',
  type: 'TEXT',
  visible: true,
};
const DEPOSITOR = {
  title: '입금자명',
  type: 'TEXT',
  visible: true,
};
const NUMBER_OF_PEOPLE = {
  title: '인원 수',
  type: 'NUMBER',
  visible: true,
};
const AGE = {
  title: '나이',
  type: 'NUMBER',
  visible: true,
};
const GENDER = {
  title: '성별',
  type: 'RADIO',
  visible: true,
};
const MAJOR = {
  title: '학교/과',
  type: 'TEXT',
  visible: true,
};
const MBTI = {
  title: 'MBTI',
  type: 'SELECT',
  visible: true,
};
const INTRODUCE = {
  title: '자기소개',
  type: 'TEXT',
  visible: false,
};
const MOTIVATION = {
  title: '지원동기',
  type: 'TEXT',
  visible: false,
};

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
