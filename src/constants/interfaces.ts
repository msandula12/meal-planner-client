import { MealType } from './enums';

export interface Day {
  day: string;
  meals: Meal[];
}

export interface Meal extends Recipe {
  schedule: MealType[];
  startDate: string;
  type: MealType;
}

export interface Recipe {
  name: string;
  url?: string;
}
