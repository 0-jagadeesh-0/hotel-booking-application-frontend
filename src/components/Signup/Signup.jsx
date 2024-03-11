import React, { useState } from 'react'
import { Alert, Box, Button, Snackbar, TextField, Typography } from '@mui/material'
import './style.css'
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [snackbar, setSnackbar] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    const validInput = () => {
        return !(firstName === '' || lastName === '' || email === '' || mobileNumber === '' || password === '');
    }

    const handleSignup = async () => {
        if (validInput()) {
            const response = await signup({ firstName, lastName, email, mobileNumber, password });
            if (response.status === 201) {
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
        else {
            setSnackbar(true);
            setErrMsg('All Fileds are required');
            setTimeout(() => setSnackbar(false), 3000);
        }

    }

    return (
        <Box className="signup-page">
            <Box className="signup-container">
                <Typography sx={{ fontSize: "1rem", color: "rgb(102, 178, 255)", fontFamily: "monospace", fontWeight: "600" }}> Create your account</Typography>
                <TextField
                    className="input-field"
                    label="First Name"
                    required
                    size='small'
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    className='input-field'
                    label="Last Name"
                    required
                    size='small'
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    className='input-field'
                    label="Email"
                    required
                    size='small'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className='input-field'
                    label="Mobile Number"
                    required
                    size='small'
                    onChange={(e) => setMobileNumber(e.target.value)}
                />
                <TextField
                    className='input-field'
                    type='password'
                    label="Password"
                    required
                    size='small'
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
                }} onClick={() => handleSignup()}>
                    Signup
                </Button>

                <Snackbar open={snackbar}>
                    <Alert variant='filled' sx={{ width: "fit-content" }} severity='error'>
                        {errMsg}
                    </Alert>
                </Snackbar>

            </Box></Box>
    )
}

export default Signup