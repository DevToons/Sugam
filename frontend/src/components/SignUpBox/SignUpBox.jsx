import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUpBox.css';
import { OtpContext } from "../../store/otp";
import { storePhoneNo } from "../../actions/otp";

const SignUpBox = () => {

    const { code, dispatchCode } = React.useContext(OtpContext);

    const [ phoneNo, setPhoneNo ] = React.useState('');

    const handleChange = (e) => {
        setPhoneNo(e.target.value);
    }

    const handleSubmit = (e) => {

        if (phoneNo.length!==13) {
            return;
        }

        console.log(phoneNo);
        dispatchCode(storePhoneNo(phoneNo));
    }


    return (
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
    );
}

export default SignUpBox;