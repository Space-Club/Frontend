import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

import Avatar from '../common/Avatar/Avatar';
import {
  ScheduleContainer,
  ScheduleContentStyled,
  ScheduleContentWrapper,
  ScheduleTitleStyled,
  WriterInfoWrapper,
  WriterNameStyled,
} from './Schedule.style';

interface ScheduleProps {
  eventId?: string;
  title?: string;
  writer?: {
    name: string;
    profileImageUrl: string;
  };
  place?: string;
  limit?: number;
  price?: number;
}

const Schedule = ({
  eventId = '1',
  title = '쌀모네 놀러 가기',
  writer = { name: '이채연', profileImageUrl: '' },
  place = '쌀모네',
  limit = 10,
  price = 20000,
}: ScheduleProps) => {
  const navigate = useNavigate();

  return (
    <ScheduleContainer onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
      <ScheduleTitleStyled>{title}</ScheduleTitleStyled>
      <ScheduleContentWrapper>
        {place && <ScheduleContentStyled>{`장소: ${place}`}</ScheduleContentStyled>}
        {limit && <ScheduleContentStyled>{`정원: ${limit}명`}</ScheduleContentStyled>}
        {price && <ScheduleContentStyled>{`회비: ${price}원`}</ScheduleContentStyled>}
      </ScheduleContentWrapper>
      <WriterInfoWrapper>
        <Avatar avatarSize="small" profileImageSrc={writer.profileImageUrl} />
        <WriterNameStyled>{writer.name}</WriterNameStyled>
      </WriterInfoWrapper>
    </ScheduleContainer>
  );
};

export default Schedule;
