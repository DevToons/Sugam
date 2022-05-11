import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './OtpBox.css';
import { OtpContext } from "../../store/otp";
import { storeOtp } from "../../actions/otp";

const OtpBox = (props) => {

    const { code, dispatchCode } = React.useContext(OtpContext);

    const [otp, setOtp] = React.useState('');

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
        dispatchCode(storeOtp(otp));
        setOtp('');
    }

    return (
        <div className="h-full py-16 px-4">
            <div className="bg-grey-lighter min-h-screen flex flex-col con1">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 con2">
                    <h3 className="text-2xl font-extrabold leading-6 my-5 text-black head-text">Sugam</h3>
                    <div className="space-x-2">
                        <h1 className="mb-8 text-3xl text-center">OTP Verification</h1>
                        <h1 className="mb-8 text-3xl text-center">({props.type})</h1>
                        <h4 className="mb-8 text-3xl text-center field subtext">{`An OTP has been sent to ${props.number}`}</h4>
                    </div>
                    <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md con3">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2 border-gray-300 con4">
                            <form
                                className="space-y-6"
                            >
                                <div className="field">
                                    <label
                                        for="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        OTP
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            type="text"
                                            autocomplete="name"
                                            required
                                            onChange={handleChange}
                                            placeholder="Enter OTP"
                                            className="appearance-none block w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <button
                                        type="submit"
                                        className="btn"
                                        onClick={handleSubmit}
                                    >
                                        <p className="txt"> Verify & Proceed</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtpBox;