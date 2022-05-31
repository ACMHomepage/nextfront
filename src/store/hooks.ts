import {
  TypedUseSelectorHook,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import type { RootState, AppDispatch } from './store';

const useDispatch = () => useDispatchBase<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;

export { useDispatch, useSelector };