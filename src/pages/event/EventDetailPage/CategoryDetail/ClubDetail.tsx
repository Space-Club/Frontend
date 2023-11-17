import { ClubDetailResponse } from '@/types/api/getEventDetail';

interface ClubDetail {
  data: ClubDetailResponse;
}

const ClubDetail = ({ data }: ClubDetail) => {
  console.log(data);
  return <div></div>;
};

export default ClubDetail;
