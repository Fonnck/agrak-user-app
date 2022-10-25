import { configureStore } from "@reduxjs/toolkit";
import users from './slices/users.slice';
import viweSlice from './slices/view.slice';

/**
 * Global Redux Store
 */
const store = configureStore({
    reducer: {
        users,
        viewSlice: viweSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;