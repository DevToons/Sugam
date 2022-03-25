import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ActiveSlotsPage from '../pages/ActiveSlotsPage/ActiveSlotsPage';
import BookSlotPage from '../pages/BookslotPage/BookslotPage';
import CreateSlotPage from '../pages/CreateSlotPage/CreateSlotPage';
import DistributorDetailsPage from '../pages/DistributorDetailsPage/DistributorDetailsPage';
import DistributorRegistrationPage from '../pages/DistributorRegistrationPage/DistributorRegistrationPage';
import HomePage from '../pages/HomePage/HomePage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage';
import UserRegistrationPage from '../pages/UserRegistrationPage/UserRegistrationPage';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/user/:userId/register' element={<UserRegistrationPage />} />
            <Route path='/user/:userId/details' element={<UserDetailsPage />} />
            <Route path='/user/:userId/bookSlot' element={<BookSlotPage />} />
            <Route path='/distributor/:distributorId/register' element={<DistributorRegistrationPage />} />
            <Route path='/distributor/:distributorId/details' element={<DistributorDetailsPage />} />
            <Route path='/distributor/:distributorId/createSlots' element={<CreateSlotPage />} />
            <Route path='/distributor/:distributorId/activeSlots' element={<ActiveSlotsPage />} />
        </Routes>
    )
};

export default Routing;
