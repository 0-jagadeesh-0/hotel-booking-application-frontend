import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function HotelComponent({ hotel }) {
    const navigate = useNavigate();
    const handleViewDetails = () => {
        const hotelId = hotel._id;
        window.sessionStorage.setItem('hotelId', hotelId);
        navigate('/rooms/' + hotelId);
    }

    return (
        <Box className="hotel-container">
            <Box className="hotel-image-container">
                <img className='hotel-image' src={hotel.imageUrl} />
            </Box>
            <Box className="hotel-description">
                <Box>
                    <Typography sx={{ fontFamily: "monospace", fontWeight: "600", fontSize: "1rem" }}>
                        {hotel.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontWeight: "400", fontSize: "0.8rem" }}>
                        {hotel.location.address}
                    </Typography>
                </Box>
                <Box sx={{ paddingRight: "10px" }}>
                    <Button onClick={() => handleViewDetails()} variant='contained' disableRipple sx={{ backgroundColor: "black", fontFamily: "monospace" }}>View Details</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default HotelComponent