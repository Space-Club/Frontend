import { EventType } from '@/types/event';

import PerformanceForm from '../PerformanceForm/PerformanceForm';
import PromotionForm from '../PromotionForm/PromotionForm';
import RecruitForm from '../RecruitForm/RecruitForm';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

interface SelectEventInfo {
  eventQuery: EventType;
}

const SelectEventInfo = ({ eventQuery, ...props }: SelectEventInfo) => {
  const formComponentMap = {
    show: <PerformanceForm {...props} />,
    promotion: <PromotionForm {...props} />,
    recruitment: <RecruitForm {...props} />,
    club: <ScheduleForm {...props} />,
  };

  const selectedForm = formComponentMap[eventQuery];

  if (!selectedForm) {
    throw new Error('잘못된 URL입니다.');
  }

  return selectedForm;
};

export default SelectEventInfo;
