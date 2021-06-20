import { MealType } from './enums';

export interface Day {
  day: string;
  meals: Meal[];
}

export interface Meal {
  name: string;
  type: MealType;
}
