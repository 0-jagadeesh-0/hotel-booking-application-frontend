import React from 'react'
import { Box, Typography } from '@mui/material';

function Profile({ profile }) {

    return (
        <Box sx={{ display: "flex", marginTop: "20px", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography sx={{ fontSize: "2rem", color: "rgb(102, 178, 255)", fontFamily: "monospace", fontWeight: "600" }}>My Profile</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", marginTop: "50px" }} className="profile-container">
                <Typography sx={{ fontSize: "1.5rem", fontFamily: "monospace" }}>
                    <strong>Name :</strong>{profile.firstName} {profile.lastName}
                </Typography>
                <Typography sx={{ fontSize: "1.5rem", fontFamily: "monospace" }}>
                    <strong>Email :</strong>{profile.email}
                </Typography>
                <Typography sx={{ fontSize: "1.5rem", fontFamily: "monospace" }}>
                    <strong>Mobile Number :</strong>{profile.mobileNo}
                </Typography>
            </Box>
        </Box>

    )
}

export default Profile