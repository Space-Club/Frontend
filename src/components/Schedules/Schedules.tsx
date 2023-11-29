import { PATH } from '@/constants/path';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import useSelectedDateContext from '@/hooks/useSelectedDateContext';
import { SchedulesProps } from '@/types/event';
import { filterSchedulesBySelectedDate } from '@/utils/getSchedules';
import moment from 'moment';

import { useNavigate, useParams } from 'react-router-dom';

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

const Schedules = ({ clubEvents }: SchedulesProps) => {
  const { selectedDate } = useSelectedDateContext();
  const { clubId } = useParams();
  if (!clubId) {
    throw new Error('there is not clubId');
  }
  const { role } = useMemberAuth({ clubId });
  const navigate = useNavigate();

  const selectedDateFormatted = moment(`${selectedDate}`).format('YYYY-MM-DD');
  const selectedDateSchedules = filterSchedulesBySelectedDate(selectedDateFormatted, clubEvents);

  return (
    <SchedulesContainer>
      <SchedulesHeaderWrapper>
        <HeaderItemStyled>상세정보</HeaderItemStyled>
        <HeaderItemStyled>{selectedDateFormatted}</HeaderItemStyled>
      </SchedulesHeaderWrapper>
      {!selectedDateSchedules.length ? (
        <NoScheduleWrapper>
          <NoScheduleMessageStyled>해당 날짜에 행사가 없습니다! </NoScheduleMessageStyled>
          {role === 'MANAGER' && (
            <LinkMessageStyled onClick={() => navigate(PATH.CLUB.CHOICE(clubId))}>
              행사 생성하기
            </LinkMessageStyled>
          )}
        </NoScheduleWrapper>
      ) : (
        <SchedulesWrapper>
          {selectedDateSchedules.map(({ id, eventInfo, managerInfo }) => {
            return (
              <Schedule
                key={id}
                eventId={id}
                title={eventInfo.title}
                manager={managerInfo.name}
                managerProfileImageUrl={managerInfo.profileImageUrl}
              />
            );
          })}
        </SchedulesWrapper>
      )}
    </SchedulesContainer>
  );
};

export default Schedules;
