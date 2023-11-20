import { PATH } from '@/constants/path';

import { useNavigate } from 'react-router-dom';

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
}

const Schedule = ({ eventId, title, manager }: ScheduleProps) => {
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
        <WriterNameStyled>{manager}</WriterNameStyled>
      </WriterInfoWrapper>
    </ScheduleContainer>
  );
};

export default Schedule;
