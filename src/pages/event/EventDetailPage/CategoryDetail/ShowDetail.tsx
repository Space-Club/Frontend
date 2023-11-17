import { EVENT_DETAIL } from '@/constants/event';
import { ShowDetailResponse } from '@/types/api/getEventDetail';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface ShowDetail {
  data: ShowDetailResponse;
}

const ShowDetail = ({ data }: ShowDetail) => {
  const { startDate, startTime, location } = data;

  return (
    <Fragment>
      <TwoContentWrapper>
        <div>
          <ContentLabel>{EVENT_DETAIL.date}</ContentLabel>
          <div>{startDate}</div>
        </div>
        <div>
          <ContentLabel>{EVENT_DETAIL.time}</ContentLabel>
          <div>{startTime}</div>
        </div>
      </TwoContentWrapper>
      <div>
        <ContentLabel>{EVENT_DETAIL.location}</ContentLabel>
        <div>{location}</div>
      </div>
    </Fragment>
  );
};

export default ShowDetail;
