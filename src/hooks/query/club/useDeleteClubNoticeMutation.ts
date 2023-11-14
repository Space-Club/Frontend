import deleteClubNotice from '@/apis/club/deleteClubNotice';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubNoticeQuery';

const useDeleteClubNoticeMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteNotice } = useMutation({
    mutationFn: deleteClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
    },
  });
  return { deleteNotice };
};

export default useDeleteClubNoticeMutation;
