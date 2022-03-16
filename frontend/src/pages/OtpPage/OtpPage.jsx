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
            <div className="signup-box">

                <h1>OTP Verification</h1>
            
                <TextField
                    label="Enter OTP"
                    type="tel"
                    size="small"
                    value={otp}
                    onChange={handleChange}
                    fullWidth
                />

                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    fullWidth
                >Verify & Proceed</Button>

            </div>
        </>
    );
}

export default OtpPage;
