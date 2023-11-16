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
  eventId: string;
  title: string;
  manager: string;
  profileImageUrl: string;
}

const Schedule = ({ eventId, title, manager, profileImageUrl }: ScheduleProps) => {
  const navigate = useNavigate();

  return (
    <ScheduleContainer>
      <ScheduleTitleStyled>{title}</ScheduleTitleStyled>
      <ScheduleContentWrapper>
        <ScheduleContentStyled onClick={() => navigate(PATH.EVENT.DETAIL(eventId))}>
          자세히 보기
        </ScheduleContentStyled>
      </ScheduleContentWrapper>
      <WriterInfoWrapper>
        <Avatar avatarSize="small" profileImageSrc={profileImageUrl} />
        <WriterNameStyled>{manager}</WriterNameStyled>
      </WriterInfoWrapper>
    </ScheduleContainer>
  );
};

export default Schedule;
