import { createSlice } from '@reduxjs/toolkit'

/**
 * User redux slice
 */
export const viweSlice = createSlice({
    name: 'users',
    initialState: {
        view: 0
    },
    reducers: {
        setView: (state, action) => {
            state.view = action.payload
        }
    }
});

export const {setView} = viweSlice.actions;
export default viweSlice.reducer;