import React from "react";
import './DistributorDetails.css'

const DistributorDetails = ({ details }) => {
    return (
        <div className="user-details-box">

            <div className="row">

                <div className="col-md-6">
                    <img 
                        src={details.image} 
                        alt={details.name} 
                        className="ration-card-img d-block mx-auto"
                     />
                </div>

                <div className="col-md-6">
                    <h1>Ration Card Details</h1>
                    <div className="row">
                        <div className="col-6">Number:</div>
                        <div className="col-6">{details.number}</div>
                        <div className="col-6">Name:</div>
                        <div className="col-6">{details.name}</div>
                        <div className="col-6">City:</div>
                        <div className="col-6">{details.city}</div>
                        <div className="col-6">State:</div>
                        <div className="col-6">{details.state}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DistributorDetails;