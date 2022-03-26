import React from "react";
import { UserDetailsContext } from "../../store/userDetails";
import './UserDetails.css'

const UserDetails = () => {

    const { userDetails } = React.useContext(UserDetailsContext);

    return (
        <div className="user-details-box">

            <div className="row">

                <div className="col-md-6">
                    <img 
                        src={userDetails.image} 
                        alt={userDetails.name} 
                        className="ration-card-img d-block mx-auto"
                     />
                </div>

                <div className="col-md-6">
                    <h1>Ration Card Details</h1>
                    <div className="row">
                        <div className="col-6">Number:</div>
                        <div className="col-6">{userDetails.rationNo}</div>
                        <div className="col-6">Name:</div>
                        <div className="col-6">{userDetails.name}</div>
                        <div className="col-6">City:</div>
                        <div className="col-6">{userDetails.city}</div>
                        <div className="col-6">State:</div>
                        <div className="col-6">{userDetails.state}</div>
                    </div>

                    <hr />

                    <h1>Distributor Details</h1>
                    <div className="row">
                        <div className="col-6">Number:</div>
                        <div className="col-6">{userDetails.distributorNo}</div>
                        <div className="col-6">Name:</div>
                        <div className="col-6">{userDetails.distributorName}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;