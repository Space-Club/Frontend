import { SchedulesProps } from '@/types/event';
import { getScheduleDates } from '@/utils/getScheduleDates';
import moment from 'moment';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper, Dot } from './ScheduleCalendar.style';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleCalendar = ({ schedules = DUMMY.schedules }: SchedulesProps) => {
  const [value, onChange] = useState<Value>(new Date());
  const scheduleDates = getScheduleDates({ schedules });

  const addContent = ({ date }: { date: Date }) => {
    const contents = [];

    if (scheduleDates.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      contents.push(<Dot />);
    }

    return <div>{contents}</div>;
  };

  return (
    <CalendarWrapper>
      <Calendar
        locale="ko"
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        tileContent={addContent}
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;

const DUMMY = {
  schedules: [
    {
      eventId: '3',
      title: '가나다',
      startDateTime: '2023-11-14T23:41:30',
      endDateTime: '2023-11-16T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '4',
      title: '라마바',
      startDateTime: '2023-11-23T23:41:30',
      endDateTime: '2023-11-24T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '5',
      title: '사아자',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-29T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '6',
      title: '사아자',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-29T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '7',
      title: '사아자',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-29T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '8',
      title: '사아자',
      startDateTime: '2023-11-27T23:41:30',
      endDateTime: '2023-11-29T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '9',
      title: '사아자',
      startDateTime: '2023-12-02T23:41:30',
      endDateTime: '2023-12-02T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
  ],
};
