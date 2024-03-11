import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './style.css';
import { signin } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await signin({ email, password });
        if (response.status === 200) {
            const data = response.data.data;
            window.sessionStorage.setItem('userId', data.userId);
            window.sessionStorage.setItem('email', data.email);
            window.sessionStorage.setItem('token', data.token);
            navigate('/');
        }
        else {
            setSnackbar(true);
            setErrMsg(response.data.message);
            setTimeout(() => setSnackbar(false), 3000);
        }
    }

    return (
        <Box className="signin-page">
            <Box className="signin-container">
                <Typography sx={{ fontSize: "1rem", color: "rgb(102, 178, 255)", fontFamily: "monospace", fontWeight: "600" }}>Signin to your an account</Typography>
                <TextField
                    className='input-field'
                    label="Email"
                    required
                    size='small'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className='input-field'
                    type='password'
                    label="Password"
                    size='small'
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button sx={{
                    margin: "10px 0",
                    width: "100%",
                    color: "#FFF",
                    fontFamily: "monospace",
                    backgroundColor: "rgb(102, 178, 255)", ':hover': {
                        backgroundColor: "rgb(102, 178, 255)"
                    }
                }} onClick={() => handleLogin()}>
                    Signin
                </Button>

                <Snackbar open={snackbar}>
                    <Alert variant='filled' sx={{ width: "fit-content" }} severity='error'>
                        {errMsg}
                    </Alert>
                </Snackbar>

            </Box></Box>
    )
}

export default Signin