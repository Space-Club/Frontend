import { END_POINTS } from '@/constants/api';
import { GetMainBannerEventsResponse } from '@/types/api/getMainBannerEvents';

import { axiosClient } from '../axiosClient';

const getMainBannerEvents = async () => {
  const { data } = await axiosClient.get<GetMainBannerEventsResponse>(END_POINTS.GET_BANNER_EVENTS);

  return data;
};

export default getMainBannerEvents;
