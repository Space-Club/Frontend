import { ScheduleCalendarProps } from '@/types/event';

import { getDateRange } from './getDateRange';

const getScheduleDates = ({ schedules }: ScheduleCalendarProps) => {
  const scheduleDates: string[] = [];
  schedules?.forEach((schedule) => {
    const { startDateTime, endDateTime } = schedule;
    const datesInRange = getDateRange(startDateTime, endDateTime);
    scheduleDates.push(...datesInRange);
  });

  return [...new Set(scheduleDates)];
};

export { getScheduleDates };
