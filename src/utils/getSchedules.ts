import { Schedule } from '@/types/event';

const isDateInRange = (selectedDate: string, start: string, end: string | null) => {
  if (!end) {
    return selectedDate === start;
  }

  return selectedDate >= start && selectedDate <= end;
};

const filterSchedulesBySelectedDate = (selectedDate: string, schedules: Schedule[]) => {
  return schedules?.filter((schedule) => {
    const { startDate, endDate } = schedule.eventInfo;
    return isDateInRange(selectedDate, startDate, endDate);
  });
};

export { isDateInRange, filterSchedulesBySelectedDate };
