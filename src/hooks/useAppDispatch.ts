import { useDispatch } from 'react-redux';

import type { AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch`
export default function useAppDispatch() {
  useDispatch<AppDispatch>();
}
