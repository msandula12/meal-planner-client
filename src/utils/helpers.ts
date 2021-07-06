import dayjs from 'dayjs';

import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';

export const fillEmptyDays = (days: Day[]) => {
  return Array.from({ length: 14 }, (_, i) => {
    const day = dayjs()
      .subtract(1, 'day')
      .startOf('week')
      .add(i + 1, 'days')
      .toISOString();

    const existingDay = days.find((d) => isSameday(d.day, day));
    if (existingDay) {
      return existingDay;
    }
    return {
      day,
      meals: {
        [MealType.BREAKFAST]: '',
        [MealType.LUNCH]: '',
        [MealType.DINNER]: '',
      },
    };
  });
};

export const formatDate = (date: string) => {
  return isToday(date) ? 'Today' : dayjs(date).format('MMM D');
};

export const getDocumentOffsetPosition = (el: HTMLElement) => {
  const { left, top } = el.getBoundingClientRect();
  const { pageXOffset, pageYOffset } = window;
  const { clientLeft, clientTop } = document.documentElement;

  return {
    left: left + pageXOffset - clientLeft,
    top: top + pageYOffset - clientTop,
  };
};

export const isSameday = (date1: string, date2: string) =>
  dayjs(date1).isSame(date2, 'day');

export const isToday = (date: string) => dayjs().isSame(date, 'day');

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
