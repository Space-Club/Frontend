import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface setFormValue {
  setValue: UseFormSetValue<FieldValues>;
  setImgFile: Dispatch<SetStateAction<string>>;
  eventDetail: getEventDetailResponse;
}

const setFormValue = ({ setValue, setImgFile, eventDetail }: setFormValue) => {
  setValue('title', eventDetail.title);
  setValue('capacity', eventDetail.capacity);
  setValue('openDate', `${eventDetail.formOpenDate}T${eventDetail.formOpenTime}`);
  setValue('closeDate', `${eventDetail.formCloseDate}T${eventDetail.formCloseTime}`);
  setImgFile(eventDetail.posterImageUrl);
  setValue('content', eventDetail.content);
};

export default setFormValue;