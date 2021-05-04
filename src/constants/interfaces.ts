import { MealType } from './enums';

export interface Day {
  day: Date;
  meals: Meal[];
}

export interface Meal extends Recipe {
  schedule: MealType[];
  startDate: Date;
  type: MealType;
}

export interface Recipe {
  name: string;
  url?: string;
}