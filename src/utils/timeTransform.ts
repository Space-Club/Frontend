import moment from 'moment';

const transDate = (date: string) => moment(date, 'YYYY-MM-DD').format('YYYY년 MM월 DD일');
const transTime = (date: string) => moment(date, 'HH-mm-ss').format('A hh:mm');

export { transDate, transTime };
