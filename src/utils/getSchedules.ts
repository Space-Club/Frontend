import { Schedule } from '@/types/event';

const isDateInRange = (selectedDate: string, startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);
  const targetDate = new Date(selectedDate);

  return targetDate >= startDate && targetDate <= endDate;
};

const isDateMatching = (selectedDate: string, startDateTime: string, endDateTime: string) => {
  const startDate = new Date(startDateTime).toISOString().split('T')[0];
  const endDate = new Date(endDateTime).toISOString().split('T')[0];
  const targetDate = new Date(selectedDate).toISOString().split('T')[0];

  return startDate === targetDate || endDate === targetDate;
};

const filterSchedulesBySelectedDate = (selectedDate: string, schedules: Schedule[]) => {
  return schedules?.filter((schedule) => {
    const { startDateTime, endDateTime } = schedule;
    return (
      isDateInRange(selectedDate, startDateTime, endDateTime) ||
      isDateMatching(selectedDate, startDateTime, endDateTime)
    );
  });
};

export { isDateInRange, isDateMatching, filterSchedulesBySelectedDate };
