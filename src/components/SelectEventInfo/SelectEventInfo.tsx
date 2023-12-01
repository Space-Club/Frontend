import {
  ClubDetailResponse,
  PromotionDetailResponse,
  RecruitmentDetailResponse,
  ShowDetailResponse,
  getEventDetailResponse,
} from '@/types/api/getEventDetail';
import { EventType, ReactHookFormProps } from '@/types/event';

import PerformanceForm from '../PerformanceForm/PerformanceForm';
import PromotionForm from '../PromotionForm/PromotionForm';
import RecruitForm from '../RecruitForm/RecruitForm';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

interface SelectEventInfo extends ReactHookFormProps {
  eventQuery: EventType;
  eventDetail?: getEventDetailResponse;
}

const SelectEventInfo = ({ eventQuery, eventDetail, ...props }: SelectEventInfo) => {
  const formComponentMap = {
    show: <PerformanceForm eventDetail={eventDetail as ShowDetailResponse} {...props} />,
    promotion: <PromotionForm eventDetail={eventDetail as PromotionDetailResponse} {...props} />,
    recruitment: <RecruitForm eventDetail={eventDetail as RecruitmentDetailResponse} {...props} />,
    club: <ScheduleForm eventDetail={eventDetail as ClubDetailResponse} {...props} />,
  };

  const selectedForm = formComponentMap[eventQuery];

  if (!selectedForm) {
    throw new Error('잘못된 URL입니다.');
  }

  return selectedForm;
};

export default SelectEventInfo;
