import getMyProfileInfo from '@/apis/users/getMyProfileInfo';
import { RegisterFormValue } from '@/pages/RegisterPage/RegisterPage';
import { getStorage } from '@/utils/localStorage';

import { UseFormSetValue } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

interface useMyProfile {
  setValue?: UseFormSetValue<RegisterFormValue>;
}

export const QUERY_KEY = {
  MY_PROFILE: 'MY_PROFILE',
  ID: getStorage('token'),
};

const useMyProfile = ({ setValue }: useMyProfile = {}) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.MY_PROFILE, QUERY_KEY.ID],
    queryFn: () => getMyProfileInfo(),
    onSuccess: ({ username, phoneNumber }) => {
      if (setValue) {
        setValue('name', username);
        setValue('number', phoneNumber);
      }
    },
  });

  return { data };
};

export default useMyProfile;
