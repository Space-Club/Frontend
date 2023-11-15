import { ScheduleCalendarProps } from '@/types/event';
import { getScheduleDates } from '@/utils/getScheduleDates';
import moment from 'moment';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper } from './ScheduleCalendar.style';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleCalendar = ({ schedules = DUMMY.schedules }: ScheduleCalendarProps) => {
  const [value, onChange] = useState<Value>(new Date());
  const scheduleDates = getScheduleDates({ schedules });
  console.log(scheduleDates);

  return (
    <CalendarWrapper>
      <Calendar
        locale="ko"
        onChange={onChange}
        value={value}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        //   tileContent={addContent} //날짜 칸에 보여지는 컨텐츠
        //   onActiveStartDateChange={({ activeStartDate }) => getActiveMonth(activeStartDate)}
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
      startDateTime: '2023-10-24T23:41:30',
      endDateTime: '2023-10-26T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '4',
      title: '라마바',
      startDateTime: '2023-10-26T23:41:30',
      endDateTime: '2023-10-26T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
    {
      eventId: '5',
      title: '사아자',
      startDateTime: '2023-10-27T23:41:30',
      endDateTime: '2023-10-29T23:41:30',
      manager: '행사 생성자 이름',
      profileImageUrl: 'profileImageUrl',
    },
  ],
};
