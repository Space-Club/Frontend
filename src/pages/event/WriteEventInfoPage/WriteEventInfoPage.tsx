import { useLocation } from 'react-router-dom';

import PerformanceForm from './PerformanceForm/PerformanceForm';
import PromotionForm from './PromotionForm/PromotionForm';
import RecruitForm from './RecruitForm/RecruitForm';
import ScheduleForm from './ScheduleForm/ScheduleForm';

const WriteEventInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortValue = queryParams.get('event');

  if (sortValue === 'performance') {
    return <PerformanceForm />;
  } else if (sortValue === 'promotion') {
    return <PromotionForm />;
  } else if (sortValue === 'recruit') {
    return <RecruitForm />;
  } else if (sortValue === 'schedule') {
    return <ScheduleForm />;
  } else {
    throw new Error('잘못된 URL입니다.');
  }
};

export default WriteEventInfoPage;
