import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { repositoriesApiSlice } from '../app/services/repositories-api-slice';

export const createStore = (options) =>
  configureStore({
    reducer: {
      [repositoriesApiSlice.reducerPath]: repositoriesApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(repositoriesApiSlice.middleware),
    ...options,
  });

export const store = createStore();

export const useAppDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
