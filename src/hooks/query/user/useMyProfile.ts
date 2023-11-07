import getMyProfileInfo from '@/apis/users/getMyProfileInfo';
import { getStorage } from '@/utils/localStorage';

import { FieldValues, UseFormSetValue } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

interface useMyProfile {
  setValue: UseFormSetValue<FieldValues>;
}

const QUERY_KEY = {
  MY_PROFILE: 'MY_PROFILE',
  ID: getStorage('token'),
};

const useMyProfile = ({ setValue }: useMyProfile) => {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.MY_PROFILE, QUERY_KEY.ID],
    queryFn: () => getMyProfileInfo(),
    onSuccess: ({ username, phoneNumber }) => {
      setValue('username', username);
      setValue('phoneNumber', phoneNumber);
    },
    enabled: false,
  });

  return { data, refetch };
};

export default useMyProfile;