import { axiosClient } from '@/apis/axiosClient';

export interface createUser {
  name: string;
  number: string;
}

const createUser = async ({ name, number }: createUser) => {
  const res = await axiosClient.post('/register', { name, number });
  return res.data;
};

export default createUser;
