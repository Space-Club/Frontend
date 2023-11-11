import patchClubNotice from '@/apis/club/patchClubNotice';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubNoticeQuery';

const usePatchClubNoticeMutation = () => {
  const queryClient = useQueryClient();
  const { data, mutate: patchNotice } = useMutation({
    mutationFn: patchClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
    },
  });

  return { data, patchNotice };
};

export default usePatchClubNoticeMutation;
