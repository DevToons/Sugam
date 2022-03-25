import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './OtpPage.css';

const OtpPage = () => {

    const [ otp, setOtp ] = React.useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(otp);
        setOtp('');
    }

    return (
        <>
            
        </>
    );
}

export default OtpPage;
