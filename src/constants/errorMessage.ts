const ERROR_MESSAGE = {
  REGISTER: {
    FAILED: '가입에 실패했습니다',
    REQUIRED_NAME: '* 이름은 필수입니다.',
    REQUIRED_NUMBER: '* 번호는 필수입니다.',

    NAME: '* 이름은 한글로 2자리~10자리까지 입력이 가능합니다.',
    NUMBER: '* 번호는 숫자로 최대 11자까지 입력이 가능합니다.',
  },
  EVENT: {
    REQUIRED_SHOW_NAME: '* 공연명은 필수입니다.',
    REQUIRED_EVENT_NAME: '* 행사명은 필수입니다.',
    REQUIRED_RECRUIT_NAME: '* 공고명은 필수입니다.',
    REQUIRED_SCHEDULE_NAME: '* 일정 제목은 필수입니다.',
    REQUIRED_SCHEDULE_MASTER: '* 일정 생성자명은 필수입니다.',
    REQUIRED_SHOW_START_TIME: '* 공연 시작 날짜는 필수입니다.',
    REQUIRED_EVENT_START_TIME: '* 행사 시작 날짜는 필수입니다.',
    REQUIRED_ACTIVITY_START_TIME: '* 활동 시작 날짜는 필수입니다.',
    REQUIRED_ACTIVITY_LAST_TIME: '* 활동 마감 날짜는 필수입니다.',
    REQUIRED_LOCATION: '* 장소명은 필수입니다.',
    REQUIRED_FORM_START_TIME: '* 신청 시작 날짜는 필수입니다.',
    REQUIRED_FORM_LAST_TIME: '* 신청 마감 날짜는 필수입니다.',
    REQUIRED_POSTER: '* 포스터 이미지는 필수입니다.',
    REQUIRED_SHOW_CONTENT: '* 공연 내용 작성은 필수입니다.',
    REQUIRED_EVENT_CONTENT: '* 행사 내용 작성은 필수입니다.',
    REQUIRED_RECRUIT_CONTENT: '* 공고 내용 작성은 필수입니다.',

    PERSONNEL: '* 정원의 최댓값은 999입니다.',
    COST: '* 비용의 최댓값은 100만원입니다.',
    BANK_NAME: '* 은행명의 최대길이는 20입니다.',
    ACCOUNT: '* 계좌 번호의 최대 길이는 30입니다.',
    MAX_TICKET: '* 인당 최대 예매 가능 수는 999입니다.',
    START_TIME: '* 날짜는 오늘 이후로 설정해야 합니다.',
    LAST_TIME: '* 날짜는 시작 날짜 이후로 설정해야 합니다.',

    CANCEL: '서버 에러로 인해 이벤트 취소에 실패했습니다.',
    ENTER_BOTH_SIDE: '* 날짜는 시작 및 마감 모두 설정해야 합니다.',
    LENGTH: (num: number) => `* 최대 ${num}자 이하여야 합니다.`,
  },
  CLUB: {
    REQUIRED_NAME: '클럽 이름을 작성해주세요.',
    REQUIRED_INFO: '클럽 소개를 작성해주세요.',
    MIN_LENGTH_NAME: '최소 두 글자 이상 작성해 주세요.',
    MIN_LENGTH_INFO: '최소 두 글자 이상 작성해 주세요.',
    MAX_LENGTH_NAME: '12글자 이상 작성할 수 없습니다.',
    MAX_LENGTH_INFO: '25글자 이상 작성할 수 없습니다.',

    JOIN_FAILED: '클럽 가입에 실패했습니다. ',
  },
  FORM: {
    POST_OPTION: '서버에러로 인해 등록에 실패했습니다.',
  },
} as const;

export { ERROR_MESSAGE };
