import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Signin from '../../components/Signin/Signin'

function SignInPage() {
    return (
        <Box>
            <Navbar />
            <Signin />
        </Box>
    )
}

export default SignInPage