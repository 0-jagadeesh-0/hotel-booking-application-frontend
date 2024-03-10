import { Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './style.css';
import { useDispatch } from 'react-redux';
import { selectCity } from '../../redux/reducers/citySlice';
import { selectBookingDate } from '../../redux/reducers/bookingDateSlice';
import { useNavigate } from 'react-router-dom';

function SearchComponent() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkOutDisabilityStatus, setCheckOutDisabilityStatus] = useState(true);
    const [checkInError, setCheckInError] = useState(false);
    const [checkOutError, setCheckOutError] = useState(false);
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleCheckInDate = (e) => {
        const upcomingCheckInDate = new Date(e);
        const currentDay = new Date();
        if (upcomingCheckInDate < currentDay) {
            setCheckInDate(null);
            setCheckInError(true);
        }
        else {
            setCheckInError(false);
            setCheckInDate(e);
            setCheckOutDisabilityStatus(false);
        }
    }

    const handleCheckoutDate = (e) => {
        const upcomingCheckOutDate = new Date(e);
        const actualCheckInDate = new Date(checkInDate);
        if (actualCheckInDate <= upcomingCheckOutDate) {
            setCheckOutError(false);
            setCheckOutDate(e);
        }
        else {
            setCheckOutDate(null);
            setCheckOutError(true);
        }
    }

    const convertToDate = (date) => {
        return (date.$M + 1) + "-" + date.$D + "-" + date.$y;
    }

    const handleSearch = () => {
        const bookingDate = {
            checkInDate: convertToDate(checkInDate),
            checkOutDate: convertToDate(checkOutDate)
        };
        window.sessionStorage.setItem('city', city);
        window.sessionStorage.setItem('bookingDate', JSON.stringify(bookingDate));
        dispatch(selectCity(city));
        dispatch(selectBookingDate(bookingDate));
        navigate('/hotels/' + city)
    }

    const handleSelectCity = (city) => {
        setCity(city);
    }

    return (
        <Box className="search">

            <Box className="search-container">
                <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                        <InputLabel id="hotel-location">Select City</InputLabel>
                        <Select
                            labelId="select-city-label"
                            id="select-city"
                            value={city}
                            label="Age"
                            onChange={(e) => handleSelectCity(e.target.value)}
                        >
                            <MenuItem value={"Agartala"}>Agartala</MenuItem>
                            <MenuItem value={"Banglore"}>Banglore</MenuItem>
                            <MenuItem value={"Gandhi Nagar"}>Gandhi Nagar</MenuItem>
                            <MenuItem value={"Noida"}>Noida</MenuItem>
                            <MenuItem value={"Shimla"}>Shimla</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box className="date-picker">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ margin: "10px 0" }} components={['DatePicker']}>
                            <DatePicker sx={{ width: "100%" }} value={checkInDate} onChange={(e) => handleCheckInDate(e)} label="Select CheckIn Date" />
                        </DemoContainer>
                    </LocalizationProvider>
                    {
                        checkInError && <Alert sx={{ width: "fit-content", margin: "5px 0" }} variant='filled' severity='error'>Date should be greater than today</Alert>
                    }
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ margin: "10px 0" }} components={['DatePicker']}>
                            <DatePicker sx={{ width: "100%" }} disabled={checkOutDisabilityStatus} value={checkOutDate} onChange={(e) => handleCheckoutDate(e)} label="Select Checkout Date" />
                        </DemoContainer>
                    </LocalizationProvider>
                    {
                        checkOutError && <Alert sx={{ width: "fit-content", margin: "5px 0" }} variant='filled' severity='error'>CheckOutDate should be greater than check in date</Alert>
                    }
                </Box>
                <Box className="search-btn">
                    <Button onClick={() => handleSearch()} disableFocusRipple disableRipple sx={{ color: "#FFF", fontSize: "1.2rem", backgroundColor: "rgb(102, 178, 255)", width: "100%", fontFamily: "monospace" }}>
                        Search
                    </Button>
                </Box>
            </Box>
        </Box>

    )
}

export default SearchComponent