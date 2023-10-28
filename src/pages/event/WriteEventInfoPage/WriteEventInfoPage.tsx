import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import PerformanceForm from './PerformanceForm/PerformanceForm';
import PromotionForm from './PromotionForm/PromotionForm';
import RecruitForm from './RecruitForm/RecruitForm';
import ScheduleForm from './ScheduleForm/ScheduleForm';

const WriteEventInfoPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortValue = queryParams.get('event');

  const [content, setContent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (sortValue === 'performance') {
      setContent(<PerformanceForm />);
    } else if (sortValue === 'promotion') {
      setContent(<PromotionForm />);
    } else if (sortValue === 'recruit') {
      setContent(<RecruitForm />);
    } else if (sortValue === 'schedule') {
      setContent(<ScheduleForm />);
    } else {
      throw new Error('잘못된 URL입니다.');
    }
  }, [sortValue]);

  return <>{content}</>;
};

export default WriteEventInfoPage;
