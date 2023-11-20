import { SearchResultRequest, SearchResultResponse } from '@/types/api/searchResult';

import { axiosClient } from '../axiosClient';

const getSearchResult = async ({ keyword, page }: SearchResultRequest) => {
  const { data } = await axiosClient.get<SearchResultResponse>(
    `/events/searches?keyword=${keyword}&page=${page}&size=18&sort=id,desc`,
  );
  return data;
};

export default getSearchResult;
