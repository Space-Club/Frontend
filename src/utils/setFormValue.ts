import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface setFormValue {
  setValue: UseFormSetValue<FieldValues>;
  eventDetail: getEventDetailResponse;
}

const setFormValue = ({ setValue, eventDetail }: setFormValue) => {
  const { eventInfo, formInfo } = eventDetail;
  const { title, content, capacity } = eventInfo;
  const { openDate, openTime, closeDate, closeTime } = formInfo;

  setValue('title', title);
  setValue('capacity', capacity);
  setValue('openDate', `${openDate}T${openTime}`);
  setValue('closeDate', `${closeDate}T${closeTime}`);
  setValue('content', content);
};

export default setFormValue;
