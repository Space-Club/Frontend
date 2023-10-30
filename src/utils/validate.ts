import { ERROR_MESSAGE } from '@/constants/errorMessage';

const { START_TIME, LAST_TIME } = ERROR_MESSAGE.EVENT;
const { NAME, NUMBER } = ERROR_MESSAGE.REGISTER;

const validateName = (input: string) => {
  const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/;

  if (regex.test(input)) {
    return true;
  } else {
    return NAME;
  }
};
const validateNumber = (input: string) => {
  const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

  if (regex.test(input)) {
    return true;
  } else {
    return NUMBER;
  }
};

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

export { validateName, validateNumber, validateTimeCompare, validateTodayDate };