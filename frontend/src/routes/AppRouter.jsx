import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ActiveSlotsPage from '../pages/ActiveSlotsPage/ActiveSlotsPage';
import BookSlotPage from '../pages/BookslotPage/BookslotPage';
import CreateSlotPage from '../pages/CreateSlotPage/CreateSlotPage';
import DistributorDetailsPage from '../pages/DistributorDetailsPage/DistributorDetailsPage';
import DistributorRegistrationPage from '../pages/DistributorRegistrationPage/DistributorRegistrationPage';
import DistributorSignUpPage from '../pages/DistributorSignUpPage/DistributorSignUpPage';
import HomePage from '../pages/HomePage/HomePage';
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage';
import UserRegistrationPage from '../pages/UserRegistrationPage/UserRegistrationPage';
import UserSignUpPage from '../pages/UserSignUpPage/UserSignUpPage';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='/userSignup' element={<UserSignUpPage />} />
            <Route path='/distributorSignup' element={<DistributorSignUpPage />} />

            <Route path='/user/:userId/register' element={<UserRegistrationPage />} />
            <Route path='/user/:userId/details' element={<UserDetailsPage />} />

            <Route path='/distributor/:distributorId/register' element={<DistributorRegistrationPage />} />
            <Route path='/distributor/:distributorId/details' element={<DistributorDetailsPage />} />

            <Route path='/user/:userId/bookSlot' element={<BookSlotPage />} />
            
            <Route path='/distributor/:distributorId/createSlots' element={<CreateSlotPage />} />
            <Route path='/distributor/:distributorId/activeSlots' element={<ActiveSlotsPage />} />
        </Routes>
    )
};

export default Routing;
