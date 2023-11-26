interface getEventDetailRequest {
  eventId: string;
}

type getEventDetailResponse =
  | ShowDetailResponse
  | PromotionDetailResponse
  | RecruitmentDetailResponse
  | ClubDetailResponse;

interface CommonDetailResponse {
  id: number;
  clubId: string;
  eventInfo: {
    title: string;
    content: string;
    applicants: number;
    capacity: number;
    posterImageUrl: string;
  };
  formInfo: {
    formOpenDate: string;
    formOpenTime: string;
    formCloseDate: string;
    formCloseTime: string;
  };
  clubName: string; // 다음 커밋에서 변경예정
  isBookmarked: boolean; // 다음 커밋에서 변경예정
  isManager: boolean; // 다음 커밋에서 변경예정
  hasForm: boolean; // 다음 커밋에서 변경예정
}

interface ShowDetailResponse extends CommonDetailResponse {
  category: 'SHOW';
  eventInfo: CommonDetailResponse['eventInfo'] & {
    startDate: string;
    startTime: string;
    location: string;
  };
  ticketInfo: {
    cost: number;
    maxTicketCount: number;
  };
  bankInfo: {
    bankName: string;
    bankAccountNumber: string;
  };
}

interface PromotionDetailResponse extends CommonDetailResponse {
  category: 'PROMOTION';
  eventInfo: CommonDetailResponse['eventInfo'] & {
    startDate: string;
    startTime: string;
    activityArea: string;
  };
}

interface RecruitmentDetailResponse extends CommonDetailResponse {
  category: 'RECRUITMENT';
  eventInfo: CommonDetailResponse['eventInfo'] & {
    startDate: string;
    startTime: string;
    location: string;
    recruitmentTarget: string;
  };
}

interface ClubDetailResponse extends CommonDetailResponse {
  category: 'CLUB';
  eventInfo: CommonDetailResponse['eventInfo'] & {
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    dues: number;
    location: string;
  };
}

export {
  getEventDetailRequest,
  getEventDetailResponse,
  ShowDetailResponse,
  PromotionDetailResponse,
  RecruitmentDetailResponse,
  ClubDetailResponse,
};
