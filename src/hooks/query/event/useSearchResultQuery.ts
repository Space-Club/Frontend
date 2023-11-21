import getSearchResult from '@/apis/event/getSearchResult';
import { SearchResultRequest } from '@/types/api/searchResult';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { SEARCH_RESULT: 'SEARCH_RESULT' };

const useSearchResultQuery = ({ keyword, page }: SearchResultRequest) => {
  const { data: searchResultData, isLoading } = useQuery({
    queryKey: [QUERY_KEY.SEARCH_RESULT, keyword],
    queryFn: () => getSearchResult({ keyword, page }),
    enabled: !!keyword,
  });

  console.log('data:', searchResultData);

  const { data, pageData } = searchResultData ?? {};

  return { data, pageData, isLoading };
};

export default useSearchResultQuery;
