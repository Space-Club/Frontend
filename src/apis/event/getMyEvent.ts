import { axiosClientWithAuth } from '../axiosClient';

interface GetMyEventProps {
  pageNum: number;
}

const getMyEvent = async ({ pageNum }: GetMyEventProps) => {
  const { data } = await axiosClientWithAuth.get(
    `/events/myEvent?page=${pageNum}size=10&sort=id,startDate`,
  );
  return data;
};

export { getMyEvent };
