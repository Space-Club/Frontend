import { ExceptionCodeMessage } from '@/types/common';

const EXCEPTION_CODE = {
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  CLUB_NOT_FOUND: 'CLUB_NOT_FOUND',
  NOTICE_NOT_FOUND: 'NOTICE_NOT_FOUND',
  EVENT_NOT_FOUND: 'EVENT_NOT_FOUND',
  FORM_NOT_FOUND: 'FORM_NOT_FOUND',
  FORM_OPTION_NOT_FOUND: 'FORM_OPTION_NOT_FOUND',
  INVITE_NOT_FOUND: 'INVITE_NOT_FOUND',
  BOOKMARK_NOT_FOUND: 'BOOKMARK_NOT_FOUND',
  NOT_CLUB_MEMBER: 'NOT_CLUB_MEMBER',
  UNAUTHORIZED: 'UNAUTHORIZED',
  CAN_NOT_WITHDRAW: 'CAN_NOT_WITHDRAW',
  EVENT_CATEGORY_NOT_ALLOWED: 'EVENT_CATEGORY_NOT_ALLOWED',
  EVENT_ALREADY_APPLIED: 'EVENT_ALREADY_APPLIED',
  EVENT_NOT_APPLIED: 'EVENT_NOT_APPLIED',
  EVENT_TICKET_NOT_MANAGED: 'EVENT_TICKET_NOT_MANAGED',
  TICKET_COUNT_REQUIRED: 'TICKET_COUNT_REQUIRED',
  EXCEED_TICKET_COUNT: 'EXCEED_TICKET_COUNT',
  INVITE_EXPIRED: 'INVITE_EXPIRED',
  CLUB_ALREADY_JOINED: 'CLUB_ALREADY_JOINED',
  ALREADY_BOOKMARKED: 'ALREADY_BOOKMARKED',
  BAD_REQUEST: 'BAD_REQUEST',
  EVENT_NOT_MANAGED: 'EVENT_NOT_MANAGED',
  CAN_NOT_SELF_DEGRADING: 'CAN_NOT_SELF_DEGRADING',
  DESERIALIZE_FAILURE: 'DESERIALIZE_FAILURE',
  INVALID_ACCESS_TOKEN: 'INVALID_ACCESS_TOKEN',
  INVALID_REFRESH_TOKEN: 'INVALID_REFRESH_TOKEN',
} as const;

const EXCEPTION_CODE_MESSAGE: ExceptionCodeMessage = {
  USER_NOT_FOUND: '존재하지 않는 유저입니다.',
  CLUB_NOT_FOUND: '존재하지 않는 클럽입니다.',
  NOTICE_NOT_FOUND: '존재하지 않는 공지사항입니다.',
  EVENT_NOT_FOUND: '존재하지 않는 행사입니다.',
  FORM_NOT_FOUND: '존재하지 않는 폼입니다.',
  FORM_OPTION_NOT_FOUND: '존재하지 않는 폼 옵션 입니다.',
  INVITE_NOT_FOUND: '해당 초대코드를 보유한 클럽이 없습니다.',
  BOOKMARK_NOT_FOUND: '존재하지 않는 북마크입니다.',
  NOT_CLUB_MEMBER: '해당 클럽의 멤버가 아닙니다.',
  UNAUTHORIZED: '권한이 없습니다.',
  CAN_NOT_WITHDRAW: '마지막 관리자는 탈퇴가 불가합니다.',
  EVENT_CATEGORY_NOT_ALLOWED: '클럽을 제외한 카테고리의 행사만 조회 가능합니다.',
  EVENT_ALREADY_APPLIED: '이미 신청한 행사입니다.',
  EVENT_NOT_APPLIED: '신청한 이력이 없는 행사입니다.',
  EVENT_TICKET_NOT_MANAGED: '행사 티켓을 관리하지 않는 행사입니다.',
  TICKET_COUNT_REQUIRED: '행사 티켓 매수는 필수입니다.',
  EXCEED_TICKET_COUNT: '인 당 티켓 예매 가능 수를 초과하였습니다.',
  INVITE_EXPIRED: '만료된 초대링크 입니다.',
  CLUB_ALREADY_JOINED: '이미 해당 클럽에 가입되어 있습니다.',
  ALREADY_BOOKMARKED: '이미 북마크한 이벤트입니다.',
  BAD_REQUEST: '잘못된 요청입니다.',
  EVENT_NOT_MANAGED: '폼이 없거나 관리모드를 설정하지 않은 폼입니다.',
  CAN_NOT_SELF_DEGRADING: '혼자 남은 관리자는 강등될 수 없습니다.',
  DESERIALIZE_FAILURE: 'JSON 데이터를 변환하는데 실패했습니다.',
  INVALID_ACCESS_TOKEN: '유효하지 않은 토큰입니다.',
  INVALID_REFRESH_TOKEN: '유효하지 않은 리프레시 토큰입니다.',
};

export { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE };
