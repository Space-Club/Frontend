import { EVENT_DETAIL } from '@/constants/event';
import { RecruitmentDetailResponse } from '@/types/api/getEventDetail';

import { Fragment } from 'react';

import { ContentLabel, TwoContentWrapper } from '../EventDetailPage.style';

interface RecruitmentDetail {
  data: RecruitmentDetailResponse;
}

const RecruitmentDetail = ({ data }: RecruitmentDetail) => {
  const { eventInfo } = data;
  const { recruitmentTarget, recruitmentLimit, activityArea } = eventInfo;

  const calculateItem = (
    recruitmentTarget: string,
    recruitmentLimit: number,
    activityArea: string,
  ) => {
    if (recruitmentTarget && recruitmentLimit && activityArea) return 3;
    else if (recruitmentTarget && recruitmentLimit) return 2;
    else if (recruitmentTarget && activityArea) return 2;
    else if (recruitmentLimit && activityArea) return 2;
    else if (recruitmentTarget || recruitmentLimit || activityArea) return 1;
    else return 0;
  };

  return (
    <Fragment>
      <TwoContentWrapper
        itemLength={calculateItem(recruitmentTarget, recruitmentLimit, activityArea)}
      >
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
        {activityArea && (
          <div>
            <ContentLabel>{EVENT_DETAIL.LOCATION}</ContentLabel>
            <div>{activityArea}</div>
          </div>
        )}
      </TwoContentWrapper>
    </Fragment>
  );
};

export default RecruitmentDetail;
