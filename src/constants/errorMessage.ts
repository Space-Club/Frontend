import { FORM_INFO_VALUE } from './limitInputValue';

const ERROR_MESSAGE = {
  REGISTER: {
    FAILED: '가입에 실패했습니다',
    REQUIRED_NAME: '* 이름은 필수입니다.',
    REQUIRED_NUMBER: '* 번호는 필수입니다.',

    NAME: '* 이름은 한글로 2자리~10자리까지 입력이 가능합니다.',
    NUMBER: '* 번호는 숫자로 최대 11자까지 입력이 가능합니다.',
  },
  EVENT: {
    REQUIRED: (text: string) => `* ${text} 필수입니다.`,
    MAX_LENGTH: (text: string, length: number) => `* ${text}의 최대 길이는 ${length}자입니다.`,
    LARGER: (small: string, large: string) => `* ${small}는 ${large}보다 클 수 없습니다.`,

    PERSONNEL: `* 정원은 ${FORM_INFO_VALUE.LIMIT_VALUE.CAPACITY_MIN}~${FORM_INFO_VALUE.LIMIT_VALUE.CAPACITY_MAX} 사이의 숫자여야합니다.`,
    COST: '* 비용의 최댓값은 100만원입니다.',
    TICKET: `* 인당 예매 가능 수는 ${FORM_INFO_VALUE.LIMIT_VALUE.COST_MIN}~${FORM_INFO_VALUE.LIMIT_VALUE.COST_MAX}입니다.`,
    MAX_YEAR: '* 최대 2099년까지 설정이 가능합니다.',
    START_TIME: '* 날짜는 오늘 이후로 설정해야 합니다.',
    LAST_TIME: '* 마감 날짜는 시작 날짜 이후로 설정해야 합니다.',
    FORM_START_TIME: (event: string) => `* ${event} 시작은 폼 마감일 이후로 설정해야 합니다.`,

    CANCEL: '서버 에러로 인해 이벤트 취소에 실패했습니다.',
    ENTER_BOTH_SIDE: '* 날짜는 시작 및 마감 모두 설정해야 합니다.',
  },
  CLUB: {
    REQUIRED_NAME: '클럽 이름을 작성해주세요.',
    REQUIRED_INFO: '클럽 소개를 작성해주세요.',
    MIN_LENGTH_NAME: '최소 두 글자 이상 작성해 주세요.',
    MIN_LENGTH_INFO: '최소 두 글자 이상 작성해 주세요.',
    MAX_LENGTH_NAME: '12글자 이상 작성할 수 없습니다.',
    MAX_LENGTH_INFO: '25글자 이상 작성할 수 없습니다.',
    VALIDATE_LENGTH_NAME: '클럽 이름은 2글자 이상 12글자 이하로 작성해주세요.',
    VALIDATE_LENGTH_INFO: '클럽 소개는 2글자 이상 25글자 이하로 작성해주세요.',

    JOIN_FAILED: '클럽 가입에 실패했습니다. ',
    CREATE_FAILED: '클럽 개설에 실패했습니다. ',

    WITHDRAW_FAILED: '클럽 탈퇴에 실패했습니다.',
  },
  FORM: {
    POST_OPTION: '서버에러로 인해 등록에 실패했습니다.',
    COMPLETE: '폼을 모두 완성해주세요.',
  },

  COMMON: {
    CURRENT_REF_ERROR: '할당된 current ref가 없습니다',
    TRIM: '공백으로만 이루어질 수 없습니다.',
    NON_TITLE: '제목이 입력되지 않은 항목이 있습니다.',
  },
} as const;

export { ERROR_MESSAGE };
