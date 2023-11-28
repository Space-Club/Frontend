import { eventTypeAPI } from '@/types/event';

import { FieldValues } from 'react-hook-form';

interface dataTransform {
  data: FieldValues;
  eventType: eventTypeAPI;
  clubId: string;
  eventId?: string;
}

const dataTransform = ({ data, eventType, clubId, eventId }: dataTransform) => {
  const { title, content, capacity, openDate, closeDate } = data;

  const commonData = {
    ...(eventId ? { eventId } : { clubId }),
    eventInfo: {
      title,
      content: content.trim(),
      capacity: parseInt(capacity),
    },
    formInfo: {
      openDate: openDate.split('T')[0],
      openTime: openDate.split('T')[1],
      closeDate: closeDate.split('T')[0],
      closeTime: closeDate.split('T')[1],
    },
  };

  switch (eventType) {
    case 'SHOW':
      return {
        ...commonData,
        eventInfo: {
          ...commonData.eventInfo,
          startDate: data.startDate.split('T')[0],
          startTime: data.startDate.split('T')[1],
          location: data.location,
        },
        ticketInfo: {
          cost: parseInt(data.cost),
          maxTicketCount: parseInt(data.maxTicketCount),
        },
        bankInfo: {
          name: data.bankName,
          accountNumber: data.accountNumber,
        },
      };

    case 'PROMOTION':
      return {
        ...commonData,
        eventInfo: {
          ...commonData.eventInfo,
          startDate: data.startDate.split('T')[0],
          startTime: data.startDate.split('T')[1],
          location: data.location,
        },
      };

    case 'RECRUITMENT':
      return {
        ...commonData,
        eventInfo: {
          ...commonData.eventInfo,
          activityArea: data.activityArea,
          recruitmentTarget: data.recruitmentTarget,
        },
      };

    case 'CLUB':
      return {
        ...commonData,
        eventInfo: {
          ...commonData.eventInfo,
          startDate: data.startDate.split('T')[0],
          startTime: data.startDate.split('T')[1],
          endDate: data.endDate.split('T')[0],
          endTime: data.endDate.split('T')[1],
          location: data.location,
          dues: parseInt(data.dues),
        },
      };

    default:
      throw new Error('해당 행사 타입은 존재하지 않습니다.');
  }
};

export default dataTransform;
