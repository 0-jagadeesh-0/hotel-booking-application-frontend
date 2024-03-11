import { BASE_URI } from '../constants/Constants';
import axios from 'axios'

export const bookRoom = async (payload) => {
    return await axios.post(`${BASE_URI}/api/v1/bookings/add`, payload);
}


export const getBookingHistory = async (userId) => {
    return await axios.get(`${BASE_URI}/api/v1/bookings/history/${userId}`);
}