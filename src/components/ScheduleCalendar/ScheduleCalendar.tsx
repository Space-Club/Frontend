import useSelectedDateContext from '@/hooks/useSelectedDateContext';
import { SchedulesProps } from '@/types/event';
import { getScheduleDates } from '@/utils/getScheduleDates';
import moment from 'moment';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper, Dot } from './ScheduleCalendar.style';

export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleCalendar = ({ schedules }: SchedulesProps) => {
  const { setSelectedDate } = useSelectedDateContext();
  const [value, setValue] = useState<Value>(new Date());
  const scheduleDates = getScheduleDates({ schedules });

  const addContent = ({ date }: { date: Date }) => {
    const contents = [];
    if (scheduleDates.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      contents.push(<Dot />);
    }
    return <div>{contents}</div>;
  };

  useEffect(() => {
    setSelectedDate(value);
  }, [value, setSelectedDate]);

  return (
    <CalendarWrapper>
      <Calendar
        locale="ko"
        onChange={setValue}
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
