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

const Schedules = ({ schedules = DUMMY.schedules }: SchedulesProps) => {
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

const DUMMY = {
  schedules: [
    {
      eventId: '3',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-16T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '10',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-14T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '11',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-14T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '12',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-14T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '13',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-14T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '15',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-14T23:41:30',
      manager: '박현지',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '4',
      title: '라마바',
      startDateTime: '2023-11-23T23:41:30',
      endDateTime: '2023-11-24T23:41:30',
      manager: '최성원',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '5',
      title: '사아자',
      startDateTime: '2023-11-26T23:41:30',
      endDateTime: '2023-11-26T23:41:30',
      manager: '황준호',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '6',
      title: '타파하',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-29T23:41:30',
      manager: '이채연',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '7',
      title: '비가옵니다',
      startDateTime: '2023-11-28T23:41:30',
      endDateTime: '2023-11-28T23:41:30',
      manager: '김혜성',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '8',
      title: '내일 눈',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-27T23:41:30',
      manager: '송인재',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '9',
      title: '오늘 오프라인',
      startDateTime: '2023-12-02T23:41:30',
      endDateTime: '2023-12-02T23:41:30',
      manager: '김동영',
      profileImageUrl: 'profileImageUrl',
    },
  ],
};
