import { SchedulesProps } from '@/types/event';

import { getDateRange } from './getDateRange';

const getScheduleDates = ({ clubEvents }: SchedulesProps) => {
  const scheduleDates: string[] = [];
  clubEvents?.forEach((event) => {
    const { startDate, endDate } = event.eventInfo;
    const datesInRange = getDateRange(startDate, endDate);
    scheduleDates.push(...datesInRange);
  });

  return [...new Set(scheduleDates)];
};

export { getScheduleDates };
