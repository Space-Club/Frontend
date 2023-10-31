import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';

import { FieldValues } from 'react-hook-form';

interface postPerformanceForm {
  data: FieldValues;
}

const postPerformanceForm = async ({ data }: postPerformanceForm) => {
  const {
    title,
    content,
    startDate,
    location,
    capacity,
    cost,
    maxTicketCount,
    bankName,
    accountNumber,
    openDate,
    closeDate,
    poster,
  } = data;

  const mook = {
    category: 'SHOW',
    clubId: 1,
    eventInfo: {
      title,
      content,
      startDate: startDate.split('T')[0],
      startTime: startDate.split('T')[1],
      location,
      capacity: parseInt(capacity),
    },
    ticketInfo: {
      cost: parseInt(cost),
      maxTicketCount: parseInt(maxTicketCount),
    },
    bankInfo: {
      name: bankName,
      accountNumber,
    },
    formInfo: {
      openDate: openDate.split('T')[0],
      openTime: openDate.split('T')[1],
      closeDate: closeDate.split('T')[0],
      closeTime: closeDate.split('T')[1],
    },
  };
  const formData = new FormData();
  formData.append('request', JSON.stringify(mook));
  const imageBlob = new Blob([poster[0]], { type: 'image/jpeg' });
  formData.append('poster', imageBlob, 'image.png');
  console.log('form', formData);
  await axiosClient.post(
    `https://spaceclub.site/api/v1${END_POINTS.PERFORMANCE_FORM}`,
    { formData },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export default postPerformanceForm;
