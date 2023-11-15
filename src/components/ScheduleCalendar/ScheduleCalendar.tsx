import moment from 'moment';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper } from './ScheduleCalendar.style';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value);

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
