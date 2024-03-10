import { createSlice } from '@reduxjs/toolkit'

export const bookingDateSlice = createSlice({
    name: 'bookingDateSlice',
    initialState: {
        value: {
            checkInDate: null,
            checkOutDate: null
        }
    },
    reducers: {
        selectBookingDate: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { selectBookingDate } = bookingDateSlice.actions;

export default bookingDateSlice.reducer;