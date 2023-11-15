import getSubmittedForms from '@/apis/event/getSubmittedForms';
import { GetSubmittedFormsRequest } from '@/types/api/submittedForms';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = { SUBMITTED_FORMS: 'SUBMITTED_FORMS' };
const FORMS_STALE_TIME = 1000 * 60;

const useGetSubmittedFormsQuery = ({ eventId }: GetSubmittedFormsRequest) => {
  const { data: submittedForms } = useQuery({
    queryKey: [QUERY_KEY.SUBMITTED_FORMS],
    queryFn: () => getSubmittedForms({ eventId }),
    staleTime: FORMS_STALE_TIME,
  });

  const { formInfo, userForms } = submittedForms ?? {};

  return { formInfo, userForms };
};

export default useGetSubmittedFormsQuery;
