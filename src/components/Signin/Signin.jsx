import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './style.css';
import { signin } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await signin({ email, password });
        const data = response.data.data;
        window.sessionStorage.setItem('userId', data.userId);
        window.sessionStorage.setItem('email', data.email);
        window.sessionStorage.setItem('token', data.token);
        navigate('/');
    }

    return (
        <Box className="signin-container">
            <TextField label="email" onChange={(e) => setEmail(e.target.value)} />
            <TextField label="password" type='password' onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={() => handleLogin()}>
                Signin
            </Button>
        </Box>
    )
}

export default Signin