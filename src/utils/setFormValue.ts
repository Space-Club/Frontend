import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface setFormValue {
  setValue: UseFormSetValue<FieldValues>;
  eventDetail: getEventDetailResponse;
}

const setFormValue = ({ setValue, eventDetail }: setFormValue) => {
  setValue('title', eventDetail.title);
  setValue('capacity', eventDetail.capacity);
  setValue('openDate', `${eventDetail.formOpenDate}T${eventDetail.formOpenTime}`);
  setValue('closeDate', `${eventDetail.formCloseDate}T${eventDetail.formCloseTime}`);
  setValue('content', eventDetail.content);
};

export default setFormValue;
