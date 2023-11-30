import { EVENT_DETAIL } from '@/constants/event';
import { ShowDetailResponse } from '@/types/api/getEventDetail';
import { transDate, transTime } from '@/utils/timeTransform';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface ShowDetail {
  data: ShowDetailResponse;
}

const ShowDetail = ({ data }: ShowDetail) => {
  const { eventInfo, ticketInfo } = data;
  const { startDate, startTime, location } = eventInfo;
  const { cost } = ticketInfo;

  return (
    <Fragment>
      <TwoContentWrapper itemLength={3}>
        <div>
          <ContentLabel>{EVENT_DETAIL.DATE}</ContentLabel>
          <div>{transDate(startDate)}</div>
        </div>
        <div>
          <ContentLabel>{EVENT_DETAIL.TIME}</ContentLabel>
          <div>{transTime(startTime)}</div>
        </div>
        <div>
          <ContentLabel>{EVENT_DETAIL.LOCATION}</ContentLabel>
          <div>{location}</div>
        </div>
        {cost && (
          <div>
            <ContentLabel>{EVENT_DETAIL.COST}</ContentLabel>
            <div>{cost.toLocaleString()}원</div>
          </div>
        )}
      </TwoContentWrapper>
    </Fragment>
  );
};

export default ShowDetail;
