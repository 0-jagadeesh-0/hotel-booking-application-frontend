import { BASE_URI } from '../constants/Constants';
import axios from 'axios'

export const getUserDetails = async (userId) => {
    return await axios.get(`${BASE_URI}/api/v1/users/getDetails/${userId}`);
}