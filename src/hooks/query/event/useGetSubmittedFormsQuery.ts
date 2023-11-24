import getSubmittedForms from '@/apis/event/getSubmittedForms';
import { GetSubmittedFormsRequest } from '@/types/api/submittedForms';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { SUBMITTED_FORMS: 'SUBMITTED_FORMS' };
const FORMS_STALE_TIME = 1000 * 60;

const useGetSubmittedFormsQuery = ({ eventId, pageNumber }: GetSubmittedFormsRequest) => {
  const { data: submittedForms } = useQuery({
    queryKey: [QUERY_KEY.SUBMITTED_FORMS],
    queryFn: () => getSubmittedForms({ eventId, pageNumber }),
    staleTime: FORMS_STALE_TIME,
    suspense: true,
  });

  const { formInfo, userForms, pageData } = submittedForms ?? {};

  return { formInfo, userForms, pageData };
};

export default useGetSubmittedFormsQuery;
