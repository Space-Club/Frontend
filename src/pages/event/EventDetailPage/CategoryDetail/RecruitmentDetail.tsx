import { EVENT_DETAIL } from '@/constants/event';
import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface RecruitmentDetail {
  data: RecruitmentDetailResponse;
}

const RecruitmentDetail = ({ data }: RecruitmentDetail) => {
  const { eventInfo } = data;
  const { recruitmentTarget, recruitmentLimit, location } = eventInfo;

  const calculateItem = (recruitmentTarget: string, recruitmentLimit: number, location: string) => {
    if (recruitmentTarget && recruitmentLimit && location) return 3;
    else if (recruitmentTarget && recruitmentLimit) return 2;
    else if (recruitmentTarget && location) return 2;
    else if (recruitmentLimit && location) return 2;
    else if (recruitmentTarget || recruitmentLimit || location) return 1;
    else return 0;
  };

  return (
    <Fragment>
      <TwoContentWrapper itemLength={calculateItem(recruitmentTarget, recruitmentLimit, location)}>
        {recruitmentTarget && (
          <div>
            <ContentLabel>{EVENT_DETAIL.RECRUIT_TARGET}</ContentLabel>
            <div>{recruitmentTarget}</div>
          </div>
        )}
        {recruitmentLimit && (
          <div>
            <ContentLabel>{EVENT_DETAIL.RECRUIT_CAPACITY}</ContentLabel>
            <div>{recruitmentLimit}</div>
          </div>
        )}
        {location && (
          <div>
            <ContentLabel>{EVENT_DETAIL.LOCATION}</ContentLabel>
            <div>{location}</div>
          </div>
        )}
      </TwoContentWrapper>
    </Fragment>
  );
};

export default RecruitmentDetail;
