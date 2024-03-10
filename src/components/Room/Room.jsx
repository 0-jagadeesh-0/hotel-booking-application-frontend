import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAvailableRoomsInHotel, getHotelById } from '../../api/hotel';
import Navbar from '../Navbar/Navbar';
import './style.css';

function Room() {
    const [roomTypes, setRoomTypes] = useState([]);
    const hotelId = window.sessionStorage.getItem('hotelId');
    const bookingDate = JSON.parse(window.sessionStorage.getItem('bookingDate'));
    const getAvailableRooms = async () => {
        const response = await getAvailableRoomsInHotel(hotelId, bookingDate.checkInDate, bookingDate.checkOutDate);
        const availableRooms = response.data;
        return availableRooms;
    }

    const filterRooms = async () => {
        const totalRooms = await getallhotels();
        const availableRooms = await getAvailableRooms();
        console.log(availableRooms);
        const totalRoomTypes = [...new Set(totalRooms.map(room => room.type))];
        console.log(totalRoomTypes);
        const availableRoomTypes = [...new Set(availableRooms.map((room) => room.type))];
        console.log(availableRoomTypes);
        setRoomTypes(totalRoomTypes);
    }

    const getallhotels = async () => {
        const response = await getHotelById(hotelId)
        const roomsData = await response.data.rooms;
        return roomsData;
    }

    useEffect(() => {
        filterRooms();

    }, []);
    return (
        <Box>
            <Navbar />
            <Box className="room-list">


                {
                    roomTypes.map((room, index) => {
                        return <Box className="room-container">
                            <Box className="room-types">
                                <Typography>
                                    {room}
                                </Typography>
                            </Box>
                            <Box className="room-desc">
                                <Typography>
                                    desc
                                </Typography>
                            </Box>
                            <Box className="book-room">
                                <Typography>
                                    Price
                                </Typography>
                                <Button>
                                    Book
                                </Button>
                            </Box>
                        </Box>
                    })
                }
            </Box>

        </Box>
    )
}

export default Room