import { Schedule } from '@/types/event';

const isDateInRange = (selectedDate: string, startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);
  const targetDate = new Date(selectedDate);

  return targetDate >= startDate && targetDate <= endDate;
};

const filterSchedulesBySelectedDate = (selectedDate: string, schedules: Schedule[]) => {
  return schedules?.filter((schedule) => {
    const { startDate, endDate } = schedule.eventInfo;
    return isDateInRange(selectedDate, startDate, endDate);
  });
};

export { isDateInRange, filterSchedulesBySelectedDate };
