import { axiosClient } from '@/apis/axiosClient';

export interface createUser {
  name: string;
  number: string;
}

const createUser = async ({ name, number }: createUser) => {
  const { data } = await axiosClient.post('/register', { name, number });
  return data;
};

export default createUser;
