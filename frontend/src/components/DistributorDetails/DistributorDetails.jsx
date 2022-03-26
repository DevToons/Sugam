import React from "react";
import { DistributerDetailsContext } from "../../store/distributorDetails";
import './DistributorDetails.css'

const DistributorDetails = ({ details }) => {

    const { distributorDetails } = React.useContext(DistributerDetailsContext);

    return (
        <div className="user-details-box">

            <div className="row">

                <div className="col-md-6">
                    <img 
                        src={distributorDetails.image} 
                        alt={distributorDetails.name} 
                        className="ration-card-img d-block mx-auto"
                     />
                </div>

                <div className="col-md-6">
                    <h1>Ration Card Details</h1>
                    <div className="row">
                        <div className="col-6">Number:</div>
                        <div className="col-6">{distributorDetails.number}</div>
                        <div className="col-6">Name:</div>
                        <div className="col-6">{distributorDetails.name}</div>
                        <div className="col-6">City:</div>
                        <div className="col-6">{distributorDetails.city}</div>
                        <div className="col-6">State:</div>
                        <div className="col-6">{distributorDetails.state}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DistributorDetails;