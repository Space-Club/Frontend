import { eventQueryString } from '@/types/event';

interface eventTypeTransform {
  eventQueryString: eventQueryString;
}

const eventTypeTransform = ({ eventQueryString }: eventTypeTransform) => {
  switch (eventQueryString) {
    case 'performance':
      return 'SHOW';
    case 'promotion':
      return 'PROMOTION';
    case 'recruit':
      return 'RECRUITMENT';
    case 'schedule':
      return 'CLUB';
    default:
      throw new Error('event 쿼리스트링이 아닙니다.');
  }
};

export default eventTypeTransform;
