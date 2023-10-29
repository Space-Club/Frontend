const ERROR_MESSAGE = {
  REGISTER: {
    REQUIRED_NAME: '* 이름은 필수입니다.',
    REQUIRED_NUMBER: '* 번호는 필수입니다.',

    NAME: '* 이름은 한글로 2자리~10자리까지 입력이 가능합니다.',
    NUMBER: '* 번호는 숫자로 최대 11자까지 입력이 가능합니다.',
  },
  EVENT: {
    REQUIRED_EVENT_NAME: '* 행사명은 필수입니다.',
    REQUIRED_START_TIME: '* 행사 시작 날짜는 필수입니다.',
    REQUIRED_LOCATION: '* 장소명은 필수입니다.',
    REQUIRED_FORM_START_TIME: '* 신청 시작 날짜는 필수입니다.',
    REQUIRED_FORM_LAST_TIME: '* 신청 마감 날짜는 필수입니다.',
    REQUIRED_POSTER: '* 포스터 이미지는 필수입니다.',
    REQUIRED_EVENT_CONTENT: '* 행사 내용 작성은 필수입니다.',

    PERSONNEL: '* 정원의 최댓값은 999입니다.',
    COST: '* 비용의 최댓값은 100만원입니다.',
    BANK_NAME: '* 은행명의 최대길이는 20입니다.',
    ACCOUNT: '* 계좌 번호의 최대 길이는 30입니다.',
    MAX_TICKET: '* 인당 최대 예매 가능 수는 999입니다.',
    START_TIME: '* 날짜는 오늘 이후로 설정해야 합니다.',
    LAST_TIME: '* 날짜는 시작 날짜 이후로 설정해야 합니다.',
  },
} as const;

export { ERROR_MESSAGE };
