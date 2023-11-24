import FormLayout from '@/pages/FormLayout/FormLayout';
import { EventType, eventTypeAPI } from '@/types/event';

import { useLocation, useParams } from 'react-router-dom';

import PerformanceForm from './PerformanceForm/PerformanceForm';
import PromotionForm from './PromotionForm/PromotionForm';
import RecruitForm from './RecruitForm/RecruitForm';
import ScheduleForm from './ScheduleForm/ScheduleForm';

const WriteEventInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventType = queryParams.get('event') as EventType;
  const { clubId } = useParams();

  if (!clubId || !eventType) {
    throw new Error('잘못된 URL입니다.');
  }

  const formProps = {
    eventType: eventType.toUpperCase() as eventTypeAPI,
    clubId,
  };

  const formComponentMap = {
    show: <PerformanceForm {...formProps} />,
    promotion: <PromotionForm {...formProps} />,
    recruitment: <RecruitForm {...formProps} />,
    club: <ScheduleForm {...formProps} />,
  };

  const selectedForm = formComponentMap[eventType];

  if (!selectedForm) {
    throw new Error('잘못된 URL입니다.');
  }

  return <FormLayout>{selectedForm}</FormLayout>;
};

export default WriteEventInfoPage;
