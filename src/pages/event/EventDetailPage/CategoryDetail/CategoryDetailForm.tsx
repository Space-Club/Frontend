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
  const { category, clubInfo, eventInfo, formInfo } = data;
  const { openDate, openTime, closeDate, closeTime } = formInfo;

  const renderCategory = () => {
    switch (category) {
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
      <EventTitle>{eventInfo.title}</EventTitle>
      {renderCategory()}
      <div>
        <ContentLabel>{EVENT_DETAIL.applicationPeriod}</ContentLabel>
        <div>
          {transDate(openDate)} {transTime(openTime)} ~ {transDate(closeDate)}{' '}
          {transTime(closeTime)}까지
        </div>
      </div>
      <div>
        <ContentLabel>{EVENT_DETAIL.organizer}</ContentLabel>
        {clubInfo.clubName}
      </div>
    </>
  );
};

export default CategoryDetailForm;
