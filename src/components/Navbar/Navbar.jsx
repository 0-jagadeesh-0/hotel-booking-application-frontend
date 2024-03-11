import React from 'react';
import './style.css'
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import HotelBookingLogo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToProfilePage = () => {
        navigate('/profile');
    }

    const navigateToBookingPage = () => {
        navigate('/booking-history');
    }

    const handleSignOut = () => {
        window.sessionStorage.clear();
        handleClose();
        navigate('/');
    }

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
                <IconButton onClick={handleMenu} disableFocusRipple disableRipple sx={{ display: profileAvatarStatus(), }}>
                    <Avatar sx={{ width: "36px", height: "36px" }} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={navigateToProfilePage}>Profile</MenuItem>
                    <MenuItem onClick={navigateToBookingPage}>My Bookings</MenuItem>
                    <MenuItem onClick={handleSignOut}>Signout</MenuItem>
                </Menu>
            </Box>

        </Box>
    )
}
export default Navbar;