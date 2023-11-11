import postClubNotice from '@/apis/club/postClubNotice';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubNoticeQuery';

const usePostNoticeMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: postNotice } = useMutation({
    mutationFn: postClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
    },
  });

  return { postNotice };
};

export default usePostNoticeMutation;
