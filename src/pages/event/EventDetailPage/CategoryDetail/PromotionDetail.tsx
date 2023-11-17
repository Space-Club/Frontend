import { PromotionDetailResponse } from '@/types/api/getEventDetail';

interface PromotionDetail {
  data: PromotionDetailResponse;
}

const PromotionDetail = ({ data }: PromotionDetail) => {
  console.log(data);
  return <div></div>;
};

export default PromotionDetail;
