import {
  MAX_CLUB_INFO_LENGTH,
  MAX_CLUB_NAME_LENGTH,
  MIN_CLUB_INFO_LENGTH,
  MIN_CLUB_NAME_LENGTH,
} from '@/constants/club';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { FormOption } from '@/types/form';

const { TRIM } = ERROR_MESSAGE.COMMON;
const { START_TIME, LARGER } = ERROR_MESSAGE.EVENT;
const { NAME, NUMBER } = ERROR_MESSAGE.REGISTER;

const validateTrim = (input: string) => {
  if (!input.trim() && input.length > 0) return TRIM;
  else return true;
};

const validateLarger = (small: string, big: string, smallText: string, bigText: string) => {
  if (parseInt(small) > parseInt(big)) {
    return LARGER(smallText, bigText);
  } else return true;
};

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
  const trimmedClubName = clubName.trim();

  if (
    trimmedClubName.length < MIN_CLUB_NAME_LENGTH ||
    trimmedClubName.length > MAX_CLUB_NAME_LENGTH
  ) {
    return false;
  }
  return true;
};

const validateClubInfo = (clubInfo: string) => {
  const trimmedClubInfo = clubInfo.trim();

  if (
    trimmedClubInfo.length < MIN_CLUB_INFO_LENGTH ||
    trimmedClubInfo.length > MAX_CLUB_INFO_LENGTH
  ) {
    return false;
  }
  return true;
};

//비어있는 title이 없는지 확인하고, 중복되는 id와 title이 있는지 확인
//함수형이고 선언적으로
const validateFormOptions = (formOptions: FormOption[]) => {
  const isTitleEmpty = formOptions.some(({ title }) => !title.trim());
  const isTitleDuplicated = formOptions.some(
    (formOption, index) =>
      formOptions.findIndex(
        (comparisonFormOption) => comparisonFormOption.title === formOption.title,
      ) !== index,
  );

  if (isTitleEmpty) {
    return false;
  }

  if (isTitleDuplicated) {
    return false;
  }

  return true;
};

export {
  validateTrim,
  validateName,
  validateLarger,
  validateNumber,
  validateTimeCompare,
  validateTodayDate,
  validateClubName,
  validateClubInfo,
  validateFormOptions,
};
