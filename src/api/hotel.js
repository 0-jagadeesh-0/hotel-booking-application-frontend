import { BASE_URI } from '../constants/Constants';
import axios from 'axios'

export const getHotelsByCityId = async (cityId) => {
    return await axios.get(`${BASE_URI}/api/v1/hotels/city/${cityId}`);
}

export const getAllHotels = async () => {
    return await axios.get(`${BASE_URI}/api/v1/hotels`);
}

export const getHotelById = async (hotelId) => {
    return await axios.get(`${BASE_URI}/api/v1/hotels/${hotelId}`);
}


export const getAvailableRoomsInHotel = async (hotelId, checkInDate, checkOutDate) => {
    return await axios.get(`${BASE_URI}/api/v1/hotels/rooms/${hotelId}?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
}
