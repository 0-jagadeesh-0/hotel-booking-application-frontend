import { Alert, Box, Button, Snackbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAvailableRoomsInHotel, getHotelById } from '../../api/hotel';
import Navbar from '../Navbar/Navbar';
import './style.css';
import { roomTypeMap } from '../../constants/Constants';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { bookRoom } from '../../api/booking';
import { useNavigate } from 'react-router-dom';



function Room() {
    const [roomTypes, setRoomTypes] = useState([]);
    const [availableRoomTypes, setAvailableRoomTypes] = useState([]);
    const [confirmationModalStatus, setConfirmationModalStatus] = useState(false);
    const [snackbarStatus, setSnackbarStatus] = useState(false);
    const [roomType, setRoomType] = useState('');
    const hotelId = window.sessionStorage.getItem('hotelId');
    const bookingDate = JSON.parse(window.sessionStorage.getItem('bookingDate'));

    const getAvailableRooms = async () => {
        const response = await getAvailableRoomsInHotel(hotelId, bookingDate.checkInDate, bookingDate.checkOutDate);
        const availableRooms = response.data;
        return availableRooms;
    }

    const getButtonDisablilityStatus = (roomType) => {
        console.log(roomType);
        console.log(availableRoomTypes);
        return !availableRoomTypes.includes(roomType);
    }

    const filterRooms = async () => {
        const totalRooms = await getallhotels();
        const availableRooms = await getAvailableRooms();
        const totalRoomTypes = [...new Set(totalRooms.map(room => room.type))];
        setAvailableRoomTypes([...new Set(availableRooms.map((room) => room.type))]);
        setRoomTypes(totalRoomTypes);
    }

    const getallhotels = async () => {
        const response = await getHotelById(hotelId)
        const roomsData = await response.data.rooms;
        return roomsData;
    }
    const navigate = useNavigate();


    useEffect(() => {
        filterRooms();
    }, []);

    const handleBook = (room) => {
        const token = window.sessionStorage.getItem('token');
        if (token === null || token === undefined) {
            navigate('/signin');
        }
        else {
            setConfirmationModalStatus(true);
            setRoomType(room)
        }
    }


    const handleBookRoom = async () => {
        const userId = window.sessionStorage.getItem('userId');
        const checkInDate = bookingDate.checkInDate;
        const checkOutDate = bookingDate.checkOutDate;
        const price = roomTypeMap[roomType].price;
        const payload = {
            userId: userId,
            hotelId: hotelId,
            roomType: roomType,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            bookingAmount: price
        }
        const response = await bookRoom(payload);
        if (response.status === 201) {
            setConfirmationModalStatus(false);
            setSnackbarStatus(true);
            navigate('/booking-history');
        }


    }

    return (
        <Box>
            <Navbar />
            <Box className="room-list">

                {
                    roomTypes.map((room, index) => {
                        return <Box className="room-container">
                            <Box className="room-types">
                                <Typography sx={{ fontSize: "1.5rem", color: "rgb(102, 178, 255)", padding: "5px 0", fontFamily: "monospace", fontWeight: "600" }}>
                                    {room + " ROOM"}
                                </Typography>
                            </Box>
                            <Box className="room-desc">
                                <Typography sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}>
                                    <strong>Size: </strong>{roomTypeMap[room].description.size}
                                </Typography>
                                <Typography sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}>
                                    <strong>Bedding: </strong>{roomTypeMap[room].description.bedding}
                                </Typography>
                                <Typography sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}>
                                    <strong>Amenities: </strong>{roomTypeMap[room].description.amenities}
                                </Typography>
                                <Typography sx={{ fontSize: "0.8rem", fontFamily: "monospace" }}>
                                    <strong>Space: </strong>{roomTypeMap[room].description.space}
                                </Typography>
                            </Box>
                            <Box className="book-room">
                                <Button onClick={() => handleBook(room)} disabled={getButtonDisablilityStatus(room)} sx={{ color: "#FFF", fontWeight: "600", backgroundColor: "rgb(102, 178, 255)", fontFamily: "monospace", ':hover': { backgroundColor: "rgb(102, 178, 255)" } }}>
                                    {!getButtonDisablilityStatus(room) ? "Book" : "UNAVAILABLE"}
                                </Button>
                                <Typography sx={{ color: "#FFF", borderRadius: "5px", padding: "5px 10px", fontSize: "1rem", fontFamily: "monospace", backgroundColor: "rgb(102, 178, 255)" }}>
                                    ₹ {roomTypeMap[room].price}
                                </Typography>

                            </Box>
                            {
                                confirmationModalStatus && <ConfirmationModal status={confirmationModalStatus} handleClose={() => setConfirmationModalStatus(false)} handleConfirm={handleBookRoom} />
                            }
                        </Box>
                    })
                }

            </Box>
            <Snackbar open={snackbarStatus} autoHideDuration={3000}>
                <Alert severity='success'>Booking Success</Alert>
            </Snackbar>

        </Box>
    )
}

export default Room