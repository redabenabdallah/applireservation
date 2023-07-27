import { configureStore } from '@reduxjs/toolkit'

import pizzaSlice from './reducer/pizzaSlice';

export const store = configureStore({
    reducer: {
        pizzas: pizzaSlice,
    },
});