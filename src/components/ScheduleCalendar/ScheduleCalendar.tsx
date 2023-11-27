import useSelectedDateContext from '@/hooks/useSelectedDateContext';
import { SchedulesProps } from '@/types/event';
import { getScheduleDates } from '@/utils/getScheduleDates';
import moment from 'moment';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { CalendarWrapper, Dot } from './ScheduleCalendar.style';

const ScheduleCalendar = ({ clubEvents }: SchedulesProps) => {
  const { selectedDate, setSelectedDate } = useSelectedDateContext();
  const scheduleDates = getScheduleDates({ clubEvents });

  const addContent = ({ date: targetDate }: { date: Date }) => {
    const contents = [];
    if (scheduleDates.find((day) => day === moment(targetDate).format('YYYY-MM-DD'))) {
      contents.push(<Dot />);
    }
    return <>{contents}</>;
  };

  return (
    <CalendarWrapper>
      <Calendar
        locale="ko"
        onChange={setSelectedDate}
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format('D')}
        tileContent={addContent}
      />
    </CalendarWrapper>
  );
};

export default ScheduleCalendar;
