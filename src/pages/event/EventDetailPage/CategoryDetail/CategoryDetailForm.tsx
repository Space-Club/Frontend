import { EVENT_DETAIL } from '@/constants/event';
import { getEventDetailResponse } from '@/types/api/getEventDetail';

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
    clubLogoImageUrl,
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
          {formOpenDate}, {formOpenTime} - {formCloseDate}, {formCloseTime}
        </div>
      </div>
      <div>
        <ContentLabel>{EVENT_DETAIL.organizer}</ContentLabel>
        <div>
          {clubLogoImageUrl}
          {clubName}
        </div>
      </div>
    </>
  );
};

export default CategoryDetailForm;
