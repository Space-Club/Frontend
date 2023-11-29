import { END_POINTS } from '@/constants/api';
import { GetMainBannerEventsResponse } from '@/types/api/getMainBannerEvents';

import axios from 'axios';

const getMainBannerEvents = async () => {
  const { data } = await axios.get<GetMainBannerEventsResponse>(END_POINTS.GET_BANNER_EVENTS);

  return data;
};

export default getMainBannerEvents;
