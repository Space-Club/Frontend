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
  hasForm: boolean;
  hasAlreadyApplied: boolean;
  clubInfo: {
    clubId: string;
    clubName: string;
  };
  eventInfo: {
    title: string;
    content: string;
    applicants: number;
    capacity: number;
    posterImageUrl: string;
    isEnded: boolean;
  };
  formInfo: {
    openDate: string;
    openTime: string;
    closeDate: string;
    closeTime: string;
    isAbleToApply: boolean;
  };
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
