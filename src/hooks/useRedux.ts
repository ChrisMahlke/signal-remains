// src/hooks/useRedux.ts
import {useDispatch, useSelector} from 'react-redux';

import type {RootState, AppDispatch} from '../store';
import type {TypedUseSelectorHook} from 'react-redux';

/**
 * Use throughout your app instead of plain `useDispatch`
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Typed selector for accessing the Redux state
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
