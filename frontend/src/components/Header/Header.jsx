import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={`${styles.body} space-x-2 mx-3`}>
            <div className="mx-2"><Link to='/'>Home</Link></div>
            <div className="mx-2">
                <Link to='/userSignup'>(user)Sign Up</Link>
            </div>
            <div className="mx-2">
                <Link to='/distributorSignup'>(distributor)Sign Up</Link>
            </div>
            <div className="mx-2"> 
                <Link to='/user/1/register'>Register(User)</Link>
            </div>
            <div className="mx-2">
                <Link to='/user/1/details'>Details(User)</Link>
            </div>
            <div className="mx-2">
                <Link to='/distributor/1/details'>Details(distributor)</Link>
            </div>
            <div className="mx-2">
                <Link to='/distributor/1/register'>Register(Distributor)</Link>
            </div>
            {/* <div className="mx-2" >
                <Link to='/distributor/1/createSlots'>Create Slots</Link>
            </div>
            <div className="mx-2">
                <Link to='/distributor/1/activeSlots'>Active Slots</Link>
            </div>
            <div className="mx-2">
                <Link to='/user/1/bookSlot'>Book Slot</Link>
            </div> */}
        </div>
    );
}

export default Header;