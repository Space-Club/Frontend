import { useLocation, useParams } from 'react-router-dom';

import PerformanceForm from './PerformanceForm/PerformanceForm';
import PromotionForm from './PromotionForm/PromotionForm';
import RecruitForm from './RecruitForm/RecruitForm';
import ScheduleForm from './ScheduleForm/ScheduleForm';

const WriteEventInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event');
  const { clubId } = useParams();

  if (!clubId) return;

  if (eventType === 'show') {
    return <PerformanceForm eventType={eventType.toUpperCase() as 'SHOW'} clubId={clubId} />;
  } else if (eventType === 'promotion') {
    return <PromotionForm eventType={eventType.toUpperCase() as 'PROMOTION'} clubId={clubId} />;
  } else if (eventType === 'recruitment') {
    return <RecruitForm eventType={eventType.toUpperCase() as 'RECRUITMENT'} clubId={clubId} />;
  } else if (eventType === 'club') {
    return <ScheduleForm eventType={eventType.toUpperCase() as 'CLUB'} clubId={clubId} />;
  } else {
    throw new Error('잘못된 URL입니다.');
  }
};

export default WriteEventInfoPage;
