import getSearchResult from '@/apis/event/getSearchResult';
import { SearchResultRequest } from '@/types/api/searchResult';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { SEARCH_RESULT: 'SEARCH_RESULT' };

const useSearchResultQuery = ({ keyword, page }: SearchResultRequest) => {
  const { data: searchResultData } = useQuery({
    queryKey: [QUERY_KEY.SEARCH_RESULT, keyword],
    queryFn: () => getSearchResult({ keyword, page }),
    enabled: !!keyword,
  });

  const { data, pageData } = searchResultData ?? {};

  return { data, pageData };
};

export default useSearchResultQuery;
