import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import './style.css'
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async () => {
        const response = await signup({ firstName, lastName, email, mobileNumber, password });
        const data = response.data.data;
        window.sessionStorage.setItem('userId', data.userId);
        window.sessionStorage.setItem('email', data.email);
        window.sessionStorage.setItem('token', data.token);
        navigate('/');
    }

    return (
        <Box className="signup-container">
            <TextField
                className="input-field"
                label="firstName"
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                className='input-field'
                label="lastName"
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                className='input-field'
                label="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                className='input-field'
                label="mobileNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
            />
            <TextField
                className='input-field'
                type='password'
                label="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => handleSignup()}>
                Signup
            </Button>
        </Box>
    )
}

export default Signup