import { MealType } from '../constants/enums';
import { Day } from '../constants/interfaces';

const MOCK_DAY: Day = {
  day: new Date(),
  meals: [
    {
      name: 'Mixed Berry Smoothie',
      schedule: [],
      starting: new Date(),
      type: MealType.BREAKFAST,
    },
    {
      name: 'Grilled Chicken Salad',
      schedule: [],
      starting: new Date(),
      type: MealType.LUNCH,
    },
    {
      name: 'Baked Cod with Veggies',
      schedule: [],
      starting: new Date(),
      type: MealType.DINNER,
    },
  ]
}

export const MOCK_SCHEDULE = Array.from({ length: 14 }).map((_, index) => {
  const today = new Date(2021, 4, 3 + index);
  return {
    day: today,
    meals: MOCK_DAY.meals.map(meal => {
      return {
        ...meal,
        starting: today,
      };
    }),
  };
});