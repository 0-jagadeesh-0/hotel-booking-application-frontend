import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Box } from '@mui/material'
import './style.css'
import Signup from '../../components/Signup/Signup'

function SignupPage() {
    return (
        <Box>
            <Navbar />
            <Signup />
        </Box>
    )
}

export default SignupPage