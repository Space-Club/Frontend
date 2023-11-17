interface getEventDetailRequest {
  eventId: string;
}

type getEventDetailResponse =
  | ShowDetailResponse
  | PromotionDetailResponse
  | RecruitmentDetailResponse
  | ClubDetailResponse;

interface ShowDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  location: string;
  cost: number;
  clubName: string;
  clubLogoImageUrl: string;
  formOpenDate: string;
  formOpenTime: string;
  formCloseDate: string;
  formCloseTime: string;
  isBookmarked: boolean;
  applicants: number;
  capacity: number;
  isManager: boolean;
  eventCategory: 'SHOW';
}

interface PromotionDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  activityArea: string;
  formOpenDate: string;
  formOpenTime: string;
  formCloseDate: string;
  formCloseTime: string;
  clubName: string;
  clubLogoImageUrl: string;
  isBookmarked: boolean;
  applicants: number;
  capacity: number;
  isManager: boolean;
  eventCategory: 'PROMOTION';
}

interface RecruitmentDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  recruitmentTarget: string;
  startDate: string;
  startTime: string;
  location: string;
  formOpenDate: string;
  formOpenTime: string;
  formCloseDate: string;
  formCloseTime: string;
  clubName: string;
  clubLogoImageUrl: string;
  isBookmarked: boolean;
  applicants: number;
  capacity: number;
  isManager: boolean;
  eventCategory: 'RECRUITMENT';
}

interface ClubDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  dues: number;
  formOpenDate: string;
  formOpenTime: string;
  formCloseDate: string;
  formCloseTime: string;
  clubName: string;
  clubLogoImageUrl: string;
  isBookmarked: boolean;
  applicants: number;
  capacity: number;
  isManager: boolean;
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
