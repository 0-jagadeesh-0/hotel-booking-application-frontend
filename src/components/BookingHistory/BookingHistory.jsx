import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { getBookingHistory } from '../../api/booking';
import './style.css'

function BookingHistory() {

    const [bookings, setBookings] = useState([]);

    const getHistory = async () => {
        const userId = window.sessionStorage.getItem('userId');
        const historybookings = await getBookingHistory(userId);
        setBookings(historybookings.data.data);
    }

    useEffect(() => {
        getHistory();
    }, [])
    return (
        <Box>
            <Navbar />
            <Box className="bookings-container">
                {
                    bookings.map((booking, index) => {
                        return <Box className="booking" key={index}>
                            <Box className="roomDetails">
                                <Typography sx={{ color: "rgb(102, 178, 255)", fontSize: "1.3rem", fontWeight: "600", fontFamily: "monospace" }}>
                                    {booking.hotel}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong style={{ fontWeight: "600" }}>
                                        Room Type:
                                    </strong>    {booking.room.type}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong>Room No:</strong> {booking.room.number}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong>
                                        Checkin:
                                    </strong>
                                    {booking.checkin.slice(0, 10)}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong>
                                        CheckOut:
                                    </strong> {booking.checkout.slice(0, 10)}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong>
                                        Booked On:
                                    </strong> {String(booking.bookingDate).slice(0, 10)}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace" }}>
                                    <strong>
                                        Booking Amount:
                                    </strong> {booking.amount}
                                </Typography>
                            </Box>
                        </Box>
                    })
                }
            </Box>
        </Box>
    )
}

export default BookingHistory