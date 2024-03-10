import { createSlice } from '@reduxjs/toolkit'

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        value: ''
    },
    reducers: {
        selectCity: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { selectCity } = citySlice.actions;

export default citySlice.reducer;