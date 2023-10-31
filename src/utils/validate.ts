import { ERROR_MESSAGE } from '@/constants/errorMessage';

const { START_TIME, LAST_TIME } = ERROR_MESSAGE.EVENT;

const validateTodayDate = (value: Date) => {
  const selectedDate = new Date(value);
  const today = new Date();

  if (selectedDate <= today) {
    return START_TIME;
  }

  return true;
};

const validateTimeCompare = (lastTime: Date, startTime: Date) => {
  const selectedTime = new Date(lastTime);
  const start = new Date(startTime);

  if (selectedTime <= start) {
    return LAST_TIME;
  }

  return true;
};

export { validateTimeCompare, validateTodayDate };
