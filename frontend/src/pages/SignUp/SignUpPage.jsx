import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './SignUpPage.css';

const SignUpPage = () => {

    const navigate=useNavigate();

    const [ phoneNo, setPhoneNo ] = React.useState('');

    const handleChange = (e) => {
        setPhoneNo(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(phoneNo);
        setPhoneNo('');
        navigate('/otp-verification');
    }

    return (
        <>
            <div className="signup-box">

                <h1>Sign up</h1>
            
                <TextField
                    label="Enter your mobile number"
                    type="tel"
                    size="small"
                    value={phoneNo}
                    onChange={handleChange}
                    fullWidth
                />

                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    fullWidth
                >Get OTP</Button>

            </div>
        </>
    );
}

export default SignUpPage;
