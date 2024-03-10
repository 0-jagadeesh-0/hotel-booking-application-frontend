import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/citySlice';
import bookingDateReducer from './reducers/bookingDateSlice';

export default configureStore({
    reducer: {
        city: cityReducer,
        bookingDate: bookingDateReducer
    }
})