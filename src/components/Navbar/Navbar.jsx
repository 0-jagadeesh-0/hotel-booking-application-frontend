import React from 'react';
import './style.css'
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import HotelBookingLogo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const getUserLoggedInStatus = () => {
    const token = window.sessionStorage.getItem('token');
    return token !== null;
}

const getLoginButtonStatus = () => {
    return getUserLoggedInStatus() ? "none" : "inline-flex";
}

const profileAvatarStatus = () => {
    return getUserLoggedInStatus() ? "inline-flex" : "none";
}

function Navbar() {
    const navigate = useNavigate();
    return (
        <Box id="navbar">
            <Box onClick={() => { navigate('/') }} className="logo-details">
                <img width={64} height={64} src={HotelBookingLogo} />
                <Typography sx={{
                    fontFamily: "monospace",
                    fontWeight: "600",
                    color: "#fff",
                    fontSize: "1.4rem",
                    letterSpacing: "2px"
                }}>
                    BookStay
                </Typography>
            </Box>
            <Box>
                <Button onClick={() => navigate('/signin')} sx={{
                    display: getLoginButtonStatus(),
                    fontFamily: "monospace",
                    color: "#FFF",
                    fontSize: "1rem",
                }}>
                    SignIn
                </Button>
                <Button onClick={() => navigate('/signup')} sx={{
                    display: getLoginButtonStatus(),
                    fontFamily: "monospace",
                    color: "#FFF",
                    fontSize: "1rem",
                }}>
                    Signup
                </Button>
                <IconButton onClick={() => navigate('/profile')} disableFocusRipple disableRipple sx={{ display: profileAvatarStatus(), }}>
                    <Avatar />
                </IconButton>
            </Box>

        </Box>
    )
}
export default Navbar;