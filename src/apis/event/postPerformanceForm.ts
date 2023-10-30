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

  const formData = {
    category: '공연',
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
  await axiosClient.post(
    END_POINTS.PERFORMANCE_FORM,
    { formData },
    {
      headers: {
        image: poster,
      },
    },
  );
};

export default postPerformanceForm;
