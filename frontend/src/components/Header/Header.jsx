import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/user/register'>Register(User)</Link>
            <Link to='/user/details'>Details(User)</Link>
            <Link to='/distributor/register'>Register(Distributor)</Link>
        </div>
    );
}

export default Header;