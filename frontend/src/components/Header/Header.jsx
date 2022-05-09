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
        </div>
    );
}

export default Header;