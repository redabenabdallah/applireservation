import { configureStore } from '@reduxjs/toolkit'

import pizzaSlice from './reducer/pizzaSlice';
import userSlice from './reducer/userSlice';

export const store = configureStore({
    reducer: {
        pizzas: pizzaSlice,
        users: userSlice,
    },
});