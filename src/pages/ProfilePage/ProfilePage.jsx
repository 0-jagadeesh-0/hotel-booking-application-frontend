import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import { Box } from '@mui/material'
import { getUserDetails } from '../../api/user'

function ProfilePage() {
    const [profileDetails, setProfileDetails] = useState('Yt');

    const getProfileData = async (userId) => {
        const response = await getUserDetails(userId);
        const userDetails = response.data.data;
        return userDetails;
    }

    const setProfileData = async () => {
        const userId = window.sessionStorage.getItem('userId');
        const userData = await getProfileData(userId);
        setProfileDetails(userData);
    }

    useEffect(() => {
        setProfileData();
    }, [])

    return (
        <Box>
            <Navbar />
            <Profile profile={profileDetails} />
        </Box>
    )
}

export default ProfilePage;