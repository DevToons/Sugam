import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/userSignup'>Sign Up(User)</Link>
            <Link to='/distributorSignup'>Sign Up(Distributor)</Link>
            <Link to='/user/1/register'>Register(User)</Link>
            <Link to='/user/1/details'>Details(User)</Link>
            <Link to='/distributor/1/register'>Register(Distributor)</Link>
            <Link to='/distributor/1/createSlots'>Create Slots</Link>
            <Link to='/distributor/1/activeSlots'>Active Slots</Link>
            <Link to='/user/1/bookSlot'>Book Slot</Link>
        </div>
    );
}

export default Header;