import dayjs from 'dayjs';

import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';

const MOCK_SCHEDULE: Day[] = [
  {
    day: '',
    meals: [
      {
        name: '',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Grilled chicken salad',
        type: MealType.LUNCH,
      },
      {
        name: 'Baked cod with veggies',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: '',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Grilled chicken salad',
        type: MealType.LUNCH,
      },
      {
        name: 'Baked cod with veggies',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Yogurt with granola',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Grilled chicken salad',
        type: MealType.LUNCH,
      },
      {
        name: 'Shrimp scampi',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: '',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Tuna sandwich',
        type: MealType.LUNCH,
      },
      {
        name: 'Shrimp scampi',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Mixed berry smoothie',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Tuna sandwich',
        type: MealType.LUNCH,
      },
      {
        name: 'Dinner out with friends',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Spinach omelette',
        type: MealType.BREAKFAST,
      },
      {
        name: '',
        type: MealType.LUNCH,
      },
      {
        name: 'Grilled steak',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Spinach omelette',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Grilled steak',
        type: MealType.LUNCH,
      },
      {
        name: 'Spaghetti and meatballs',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: '',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Spaghetti and meatballs',
        type: MealType.LUNCH,
      },
      {
        name: 'Chicken piccata',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: '',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Spaghetti and meatballs',
        type: MealType.LUNCH,
      },
      {
        name: 'Chicken piccata',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Mixed berry smoothie',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Chinese takeout',
        type: MealType.LUNCH,
      },
      {
        name: 'Salmon and asparagus',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Mixed berry smoothie',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Chinese takeout',
        type: MealType.LUNCH,
      },
      {
        name: 'Salmon and asparagus',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Mixed berry smoothie',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Caesar salad',
        type: MealType.LUNCH,
      },
      {
        name: 'Pizza',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Oatmeal',
        type: MealType.BREAKFAST,
      },
      {
        name: 'Caesar salad and leftover pizza',
        type: MealType.LUNCH,
      },
      {
        name: 'Dinner out with friends',
        type: MealType.DINNER,
      },
    ],
  },
  {
    day: '',
    meals: [
      {
        name: 'Oatmeal',
        type: MealType.BREAKFAST,
      },
      {
        name: '',
        type: MealType.LUNCH,
      },
      {
        name: "Dinner at mom and dad's",
        type: MealType.DINNER,
      },
    ],
  },
];

export const getMockSchedule = (): Day[] => {
  return MOCK_SCHEDULE.map((item, i) => {
    const day = dayjs()
      .startOf('week')
      .add(i + 1, 'days')
      .toISOString();

    return {
      ...item,
      day,
    };
  });
};
