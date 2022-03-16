import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DistributorRegistrationPage from '../pages/DistributorRegistrationPage/DistributorRegistrationPage';
import HomePage from '../pages/HomePage/HomePage';
import OtpPage from '../pages/OtpPage/OtpPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage';
import UserRegistrationPage from '../pages/UserRegistrationPage/UserRegistrationPage';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/otp-verification' element={<OtpPage />} />
            <Route path='/user/register' element={<UserRegistrationPage />} />
            <Route path='/user/details' element={<UserDetailsPage />} />
            <Route path='/distributor/register' element={<DistributorRegistrationPage />} />
        </Routes>
    )
};

export default Routing;
