import React from 'react'
import { getUserDetails } from '../../api/user';
import { Box, Typography } from '@mui/material';

function Profile({ profile }) {

    return (
        <Box className="profile-container">
            <Typography>
                {profile.firstName}
            </Typography>
            <Typography>
                {profile.lastName}
            </Typography>
            <Typography>
                {profile.email}
            </Typography>
            <Typography>
                {profile.mobileNo}
            </Typography>
        </Box>
    )
}

export default Profile