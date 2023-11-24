import {
  MAX_CLUB_INFO_LENGTH,
  MAX_CLUB_NAME_LENGTH,
  MIN_CLUB_INFO_LENGTH,
  MIN_CLUB_NAME_LENGTH,
} from '@/constants/club';
import { ERROR_MESSAGE } from '@/constants/errorMessage';

const { START_TIME } = ERROR_MESSAGE.EVENT;
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

const validateTimeCompare = (startTime: Date, lastTime: Date, errorMessage: string) => {
  const selectedTime = new Date(lastTime);
  const start = new Date(startTime);

  if (selectedTime < start) {
    return errorMessage;
  }

  return true;
};

const validateClubName = (clubName: string) => {
  if (clubName.length < MIN_CLUB_NAME_LENGTH || clubName.length > MAX_CLUB_NAME_LENGTH) {
    return false;
  }
  return true;
};

const validateClubInfo = (clubInfo: string) => {
  if (clubInfo.length < MIN_CLUB_INFO_LENGTH || clubInfo.length > MAX_CLUB_INFO_LENGTH) {
    return false;
  }
  return true;
};

export {
  validateName,
  validateNumber,
  validateTimeCompare,
  validateTodayDate,
  validateClubName,
  validateClubInfo,
};
