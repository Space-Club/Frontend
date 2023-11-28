const getDateRange = (start: string, end: string | null) => {
  if (!end) {
    return [new Date(start).toISOString().split('T')[0]];
  }

  const startDate = new Date(start);
  const endDate = new Date(end);

  const dateRange = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dateRange.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
};

export { getDateRange };
