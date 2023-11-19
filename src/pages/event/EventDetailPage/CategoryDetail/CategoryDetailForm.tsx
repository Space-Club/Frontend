import { EVENT_DETAIL } from '@/constants/event';
import { getEventDetailResponse } from '@/types/api/getEventDetail';
import { transDate, transTime } from '@/utils/timeTransform';

import { ContentLabel, EventTitle } from '../EventDetailPage.style';
import ClubDetail from './ClubDetail';
import PromotionDetail from './PromotionDetail';
import RecruitmentDetail from './RecruitmentDetail';
import ShowDetail from './ShowDetail';

interface CategoryDetailForm {
  data: getEventDetailResponse;
}

const CategoryDetailForm = ({ data }: CategoryDetailForm) => {
  const {
    eventCategory,
    title,
    formOpenDate,
    formOpenTime,
    formCloseDate,
    formCloseTime,
    clubName,
  } = data;

  const renderCategory = () => {
    switch (eventCategory) {
      case 'SHOW':
        return <ShowDetail data={data} />;
      case 'PROMOTION':
        return <PromotionDetail data={data} />;
      case 'RECRUITMENT':
        return <RecruitmentDetail data={data} />;
      case 'CLUB':
        return <ClubDetail data={data} />;
    }
  };

  return (
    <>
      <EventTitle>{title}</EventTitle>
      {renderCategory()}
      <div>
        <ContentLabel>{EVENT_DETAIL.applicationPeriod}</ContentLabel>
        <div>
          {transDate(formOpenDate)} {transTime(formOpenTime)} ~ {transDate(formCloseDate)}{' '}
          {transTime(formCloseTime)}까지
        </div>
      </div>
      <div>
        <ContentLabel>{EVENT_DETAIL.organizer}</ContentLabel>
        {clubName}
      </div>
    </>
  );
};

export default CategoryDetailForm;
