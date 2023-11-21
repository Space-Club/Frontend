import { END_POINTS } from '@/constants/api';
import { SearchResultRequest, SearchResultResponse } from '@/types/api/searchResult';

import { axiosClient } from '../axiosClient';

const getSearchResult = async ({ keyword, page }: SearchResultRequest) => {
  const { data } = await axiosClient.get<SearchResultResponse>(
    END_POINTS.SEARCHES({ keyword, page }),
  );
  return data;
};

export default getSearchResult;
