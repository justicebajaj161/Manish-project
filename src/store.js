import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './features/cars/carsSlice';
export const store = configureStore({
    reducer: {
      cars: carsSlice,
   
    },
  });