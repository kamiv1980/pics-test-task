import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
    name: 'scroll',
    initialState: {
        scrollPosition: 0,
    },
    reducers: {
        setScrollPosition: (state, action) => {
            state.scrollPosition = action.payload;
        },
    },
});

export const { setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;
