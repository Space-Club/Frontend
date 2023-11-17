interface getEventDetailRequest {
  eventId: string;
}

interface ShowDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  location: string;
  dues: number;
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
  eventCategory: 'PROMOTION';
}

interface RecruitmentDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
  recruitmentTarget: string;
  activityArea: string;
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
  eventCategory: 'RECRUITMENT';
}

interface ClubDetailResponse {
  id: number;
  title: string;
  content: string;
  posterImageUrl: string;
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
  eventCategory: 'CLUB';
}

export {
  getEventDetailRequest,
  ShowDetailResponse,
  PromotionDetailResponse,
  RecruitmentDetailResponse,
  ClubDetailResponse,
};
