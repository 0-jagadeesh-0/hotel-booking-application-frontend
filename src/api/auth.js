import { BASE_URI } from '../constants/Constants';
import axios from 'axios'

export const signup = async (payload) => {
    return await axios.post(`${BASE_URI}/api/v1/auth/signup`, payload);
}

export const signin = async (payload) => {
    return await axios.post(`${BASE_URI}/api/v1/auth/signin`, payload);
}