import dayjs from 'dayjs';

import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';

const MOCK_DAY: Day = {
  day: new Date().toISOString(),
  meals: [
    {
      name: 'Mixed Berry Smoothie',
      schedule: [],
      startDate: new Date().toISOString(),
      type: MealType.BREAKFAST,
    },
    {
      name: 'Grilled Chicken Salad',
      schedule: [],
      startDate: new Date().toISOString(),
      type: MealType.LUNCH,
    },
    {
      name: 'Baked Cod with Veggies',
      schedule: [],
      startDate: new Date().toISOString(),
      type: MealType.DINNER,
    },
  ],
};

export const MOCK_SCHEDULE = Array.from({ length: 14 }).map((_, index) => {
  const day = dayjs()
    .startOf('week')
    .add(index + 1, 'days')
    .toISOString();

  // const isToday = dayjs().isSame(dayjs(day), 'day');
  return {
    day,
    meals: MOCK_DAY.meals.map((meal) => {
      return {
        ...meal,
        startDate: day,
      };
    }),
  };
});
