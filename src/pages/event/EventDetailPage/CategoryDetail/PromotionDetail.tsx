import { EVENT_DETAIL } from '@/constants/event';
import { PromotionDetailResponse } from '@/types/api/getEventDetail';
import { transDate, transTime } from '@/utils/timeTransform';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface PromotionDetail {
  data: PromotionDetailResponse;
}

const PromotionDetail = ({ data }: PromotionDetail) => {
  const { startDate, startTime, activityArea } = data;
  return (
    <Fragment>
      <TwoContentWrapper itemLength={3}>
        <div>
          <ContentLabel>{EVENT_DETAIL.date}</ContentLabel>
          <div>{transDate(startDate)}</div>
        </div>
        <div>
          <ContentLabel>{EVENT_DETAIL.time}</ContentLabel>
          <div>{transTime(startTime)}</div>
        </div>
        <div>
          <ContentLabel>{EVENT_DETAIL.location}</ContentLabel>
          <div>{activityArea}</div>
        </div>
      </TwoContentWrapper>
    </Fragment>
  );
};

export default PromotionDetail;
