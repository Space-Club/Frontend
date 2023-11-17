import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';

interface RecruitmentDetail {
  data: RecruitmentDetailResponse;
}

const RecruitmentDetail = ({ data }: RecruitmentDetail) => {
  console.log(data);
  return <div></div>;
};

export default RecruitmentDetail;
