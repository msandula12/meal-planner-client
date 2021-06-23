import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return isToday(date) ? 'Today' : dayjs(date).format('MMM D');
};

export const isToday = (date: string) => dayjs().isSame(date, 'day');

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
