import { EVENT_DETAIL } from '@/constants/event';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { transDate, transTime } from '@/utils/timeTransform';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface ShowDetail {
  data: ShowDetailResponse;
}

const ShowDetail = ({ data }: ShowDetail) => {
  const { startDate, startTime, location, cost } = data;

  return (
    <Fragment>
      <TwoContentWrapper>
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
          <div>{location}</div>
        </div>
        {cost && (
          <div>
            <ContentLabel>{EVENT_DETAIL.cost}</ContentLabel>
            <div>{cost.toLocaleString()}원</div>
          </div>
        )}
      </TwoContentWrapper>
    </Fragment>
  );
};

export default ShowDetail;
