import { END_POINTS } from '@/constants/api';
import {
  ClubDetailResponse,
  PromotionDetailResponse,
  RecruitmentDetailResponse,
  ShowDetailResponse,
  getEventDetailRequest,
} from '@/types/api/getEventDetail';

import { axiosClientWithAuth } from '../axiosClient';

const getEventDetail = async ({ eventId }: getEventDetailRequest) => {
  const { data } = await axiosClientWithAuth.get<
    ShowDetailResponse | PromotionDetailResponse | RecruitmentDetailResponse | ClubDetailResponse
  >(`${END_POINTS.GET_EVENT_DETAIL}/${eventId}`);

  return data;
};

export default getEventDetail;
