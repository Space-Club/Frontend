import { EVENT_DETAIL } from '@/constants/event';
import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface RecruitmentDetail {
  data: RecruitmentDetailResponse;
}

const RecruitmentDetail = ({ data }: RecruitmentDetail) => {
  const { eventInfo } = data;
  const { recruitmentTarget, capacity, location } = eventInfo;

  const calculateItem = (recruitmentTarget: string, capacity: number, location: string) => {
    if (recruitmentTarget && capacity && location) return 3;
    else if (recruitmentTarget && capacity) return 2;
    else if (recruitmentTarget && location) return 2;
    else if (capacity && location) return 2;
    else if (recruitmentTarget || capacity || location) return 1;
    else return 0;
  };

  return (
    <Fragment>
      <TwoContentWrapper itemLength={calculateItem(recruitmentTarget, capacity, location)}>
        {recruitmentTarget && (
          <div>
            <ContentLabel>{EVENT_DETAIL.recruitTarget}</ContentLabel>
            <div>{recruitmentTarget}</div>
          </div>
        )}
        {capacity && (
          <div>
            <ContentLabel>{EVENT_DETAIL.recruitCapacity}</ContentLabel>
            <div>{capacity}</div>
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

export default RecruitmentDetail;
