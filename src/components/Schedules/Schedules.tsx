import { PATH } from '@/constants/path';
import useSelectedDateContext from '@/hooks/useSelectedDateContext';
import { SchedulesProps } from '@/types/event';
import { filterSchedulesBySelectedDate } from '@/utils/getSchedules';
import moment from 'moment';

import { useNavigate } from 'react-router-dom';

import Schedule from '../Schedule/Schedule';
import {
  HeaderItemStyled,
  LinkMessageStyled,
  NoScheduleMessageStyled,
  NoScheduleWrapper,
  SchedulesContainer,
  SchedulesHeaderWrapper,
  SchedulesWrapper,
} from './Schedules.style';

const Schedules = ({ schedules }: SchedulesProps) => {
  const { selectedDate } = useSelectedDateContext();
  const navigate = useNavigate();

  const selectedDateFormatted = moment(`${selectedDate}`).format('YYYY-MM-DD');
  const selectedDateSchedules = filterSchedulesBySelectedDate(selectedDateFormatted, schedules);

  return (
    <SchedulesContainer>
      <SchedulesHeaderWrapper>
        <HeaderItemStyled>상세정보</HeaderItemStyled>
        <HeaderItemStyled>{selectedDateFormatted}</HeaderItemStyled>
      </SchedulesHeaderWrapper>
      {!selectedDateSchedules.length ? (
        <NoScheduleWrapper>
          <NoScheduleMessageStyled>해당 날짜에 행사가 없습니다! </NoScheduleMessageStyled>
          <LinkMessageStyled onClick={() => navigate(PATH.CREATE)}>행사 생성하기</LinkMessageStyled>
        </NoScheduleWrapper>
      ) : (
        <SchedulesWrapper>
          {selectedDateSchedules.map((schedule) => {
            return (
              <Schedule
                key={schedule.eventId}
                eventId={schedule.eventId}
                title={schedule.title}
                manager={schedule.manager}
                profileImageUrl={schedule.profileImageUrl}
              />
            );
          })}
        </SchedulesWrapper>
      )}
    </SchedulesContainer>
  );
};

export default Schedules;
