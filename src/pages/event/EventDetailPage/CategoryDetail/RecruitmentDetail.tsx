import { EVENT_DETAIL } from '@/constants/event';
import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface RecruitmentDetail {
  data: RecruitmentDetailResponse;
}

const RecruitmentDetail = ({ data }: RecruitmentDetail) => {
  const { recruitmentTarget, capacity, location } = data;
  return (
    <Fragment>
      <TwoContentWrapper>
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
