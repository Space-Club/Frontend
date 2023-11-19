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
  title: string;
  content: string;
  posterImageUrl: string;
  formOpenDate: string;
  formOpenTime: string;
  formCloseDate: string;
  formCloseTime: string;
  clubName: string;
  clubLogoImageUrl: string;
  applicants: number;
  capacity: number;
  isBookmarked: boolean;
  isManager: boolean;
  hasForm: boolean;
}

interface ShowDetailResponse extends CommonDetailResponse {
  startDate: string;
  startTime: string;
  location: string;
  cost: number;
  eventCategory: 'SHOW';
  maxTicketCount: number;
}

interface PromotionDetailResponse extends CommonDetailResponse {
  startDate: string;
  startTime: string;
  activityArea: string;
  eventCategory: 'PROMOTION';
}

interface RecruitmentDetailResponse extends CommonDetailResponse {
  recruitmentTarget: string;
  startDate: string;
  startTime: string;
  location: string;
  eventCategory: 'RECRUITMENT';
}

interface ClubDetailResponse extends CommonDetailResponse {
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  dues: number;
  eventCategory: 'CLUB';
}

export {
  getEventDetailRequest,
  getEventDetailResponse,
  ShowDetailResponse,
  PromotionDetailResponse,
  RecruitmentDetailResponse,
  ClubDetailResponse,
};
