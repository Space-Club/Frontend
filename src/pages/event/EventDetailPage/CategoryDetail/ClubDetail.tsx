import { EVENT_DETAIL } from '@/constants/event';
import { ClubDetailResponse } from '@/types/api/getEventDetail';
import { transDate, transTime } from '@/utils/timeTransform';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface ClubDetail {
  data: ClubDetailResponse;
}

const ClubDetail = ({ data }: ClubDetail) => {
  const { startDate, startTime, endDate, endTime, dues, location } = data;

  const calculateItem = (dues: number, location: string) => {
    if (dues && location) return 3;
    else if (dues || location) return 2;
    else return 1;
  };

  return (
    <Fragment>
      <TwoContentWrapper itemLength={calculateItem(dues, location)}>
        <div>
          <ContentLabel>{EVENT_DETAIL.schedule}</ContentLabel>
          {transDate(startDate)} {transTime(startTime)} ~ {transDate(endDate)} {transTime(endTime)}
          까지
        </div>
        {dues && (
          <div>
            <ContentLabel>{EVENT_DETAIL.cost}</ContentLabel>
            <div>{dues}</div>
          </div>
        )}
        {location && (
          <div>
            <ContentLabel>{EVENT_DETAIL.location}</ContentLabel>
            <div>{location}</div>
          </div>
        )}
      </TwoContentWrapper>
    </Fragment>
  );
};

export default ClubDetail;
