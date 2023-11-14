import { useLocation } from 'react-router-dom';

import PerformanceForm from './PerformanceForm/PerformanceForm';
import PromotionForm from './PromotionForm/PromotionForm';
import RecruitForm from './RecruitForm/RecruitForm';
import ScheduleForm from './ScheduleForm/ScheduleForm';

const WriteEventInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event');

  if (eventType === 'performance') {
    return <PerformanceForm />;
  } else if (eventType === 'promotion') {
    return <PromotionForm />;
  } else if (eventType === 'recruit') {
    return <RecruitForm />;
  } else if (eventType === 'schedule') {
    return <ScheduleForm />;
  } else {
    throw new Error('잘못된 URL입니다.');
  }
};

export default WriteEventInfoPage;
