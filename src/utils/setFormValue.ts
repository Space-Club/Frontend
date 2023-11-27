import { getEventDetailResponse } from '@/types/api/getEventDetail';

import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface setFormValue {
  setValue: UseFormSetValue<FieldValues>;
  eventDetail: getEventDetailResponse;
}

const setFormValue = ({ setValue, eventDetail }: setFormValue) => {
  const { eventInfo, formInfo } = eventDetail;
  const { title, content, capacity } = eventInfo;
  const { formOpenDate, formOpenTime, formCloseDate, formCloseTime } = formInfo;

  setValue('title', title);
  setValue('capacity', capacity);
  setValue('openDate', `${formOpenDate}T${formOpenTime}`);
  setValue('closeDate', `${formCloseDate}T${formCloseTime}`);
  setValue('content', content);
};

export default setFormValue;
