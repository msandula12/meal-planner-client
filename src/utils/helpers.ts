import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return isToday(date) ? 'Today' : dayjs(date).format('MMM DD');
};

export const isToday = (date: string) => dayjs().isSame(date, 'day');
