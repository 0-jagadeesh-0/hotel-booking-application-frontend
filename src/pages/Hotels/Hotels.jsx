import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { cityIdMap } from '../../constants/Constants';
import { getHotelsByCityId } from '../../api/hotel';
import { selectCity } from '../../redux/reducers/citySlice';
import { selectBookingDate } from '../../redux/reducers/bookingDateSlice';
import HotelComponent from '../../components/HotelComponent/HotelComponent';
import './style.css'

function Hotels() {
    const [hotels, setHotels] = useState([]);
    const city = window.sessionStorage.getItem('city');
    const cityId = cityIdMap[city];

    const getHotelsInCity = async () => {
        const response = await getHotelsByCityId(cityId);
        const hotelsData = response.data.data;
        return hotelsData;
    }

    const setHotelsByCity = async () => {
        const data = await getHotelsInCity();
        setHotels(data);
    }
    useEffect(() => {
        setHotelsByCity();
    }, [])

    return (
        <Box>
            <Navbar />
            <Typography sx={{ paddingTop: "30px", textAlign: "center", fontSize: "2rem", color: "rgb(102, 178, 255)", fontFamily: "monospace", fontWeight: "600" }}>Hotels in {city}</Typography>

            <Box className="hotel-list">
                {hotels.map((hotel, index) => {
                    return <HotelComponent key={index} hotel={hotel} />
                })}
            </Box>
        </Box>
    )
}

export default Hotels