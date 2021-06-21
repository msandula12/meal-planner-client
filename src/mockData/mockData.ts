import dayjs from 'dayjs';

import { MealType } from 'constants/enums';
import { Day } from 'constants/interfaces';

const MOCK_SCHEDULE: Day[] = [
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: '',
      [MealType.LUNCH]: 'Grilled chicken salad',
      [MealType.DINNER]: 'Baked cod with veggies',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: '',
      [MealType.LUNCH]: 'Grilled chicken salad',
      [MealType.DINNER]: 'Baked cod with veggies',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Yogurt with granola',
      [MealType.LUNCH]: 'Grilled chicken salad',
      [MealType.DINNER]: 'Shrimp scampi',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: '',
      [MealType.LUNCH]: 'Tuna sandwich',
      [MealType.DINNER]: 'Shrimp scampi',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Mixed berry smoothie',
      [MealType.LUNCH]: 'Tuna sandwich',
      [MealType.DINNER]: 'Dinner out with friends',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Spinach omelette',
      [MealType.LUNCH]: '',
      [MealType.DINNER]: 'Grilled steak',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Spinach omelette',
      [MealType.LUNCH]: 'Grilled steak',
      [MealType.DINNER]: 'Spaghetti and meatballs',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: '',
      [MealType.LUNCH]: 'Spaghetti and meatballs',
      [MealType.DINNER]: 'Chicken piccata',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: '',
      [MealType.LUNCH]: 'Spaghetti and meatballs',
      [MealType.DINNER]: 'Chicken piccata',
    },
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Mixed berry smoothie',
      [MealType.LUNCH]: 'Chinese takeout',
      [MealType.DINNER]: 'Salmon and asparagus',
    },    
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Mixed berry smoothie',
      [MealType.LUNCH]: 'Chinese takeout',
      [MealType.DINNER]: 'Salmon and asparagus',
    },  
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Mixed berry smoothie',
      [MealType.LUNCH]: 'Caesar salad',
      [MealType.DINNER]: 'Pizza',
    },  
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Oatmeal',
      [MealType.LUNCH]: 'Caesar salad and leftover pizza',
      [MealType.DINNER]: 'Dinner out with friends',
    },     
  },
  {
    day: '',
    meals: {
      [MealType.BREAKFAST]: 'Oatmeal',
      [MealType.LUNCH]: '',
      [MealType.DINNER]: "Dinner at mom and dad's",
    },
  },
];

export const getMockSchedule = (): Day[] => {
  return MOCK_SCHEDULE.map((item, i) => {
    const day = dayjs()
      .subtract(1, 'day')
      .startOf('week')
      .add(i + 1, 'days')
      .toISOString();

    return {
      ...item,
      day,
    };
  });
};
