import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';

//import { END_POINTS } from '@/constants/api';

export interface CreateClubFormValue {
  name: string;
  info: string;
  owner: string;
  image: File | null; //현재는 string으로 받아야 함
}

const postCreateClub = async ({ name, info, owner, image }: CreateClubFormValue) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('info', info);
  formData.append('owner', owner);
  if (image) {
    formData.append('image', image);
  }
  const { data } = await axiosClient.post(END_POINTS.CREATE_CLUB, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  // const requestData = {
  //   name,
  //   info,
  //   owner,
  //   // 이미지를 처리하려면 여기에서 필요한 형식으로 데이터를 추가
  // };

  //const { data } = await axiosClient.post(END_POINTS.CREATE_CLUB, requestData);

  return data;
};

export default postCreateClub;
