import { MealType } from './enums';

export interface Day {
  day: string;
  meals: Meal;
}

export type Meal = {
  [key in MealType]: string;
};

export interface User {
  id: string;
  name: string;
}
