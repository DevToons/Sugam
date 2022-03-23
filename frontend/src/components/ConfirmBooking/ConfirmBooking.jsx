import React from "react";
import './ConfirmBooking.css';
import  { bookSlotData } from '../../data/bookSlotData';

const ConfirmBooking = () => {

    const data = bookSlotData[0];

    return (
        <div className="confirm-booking-box">
            <div className="row">

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">Ration Card no. :</div>
                        <div className="col-6">{data.rationNum}</div>
                        <div className="col-6">Name :</div>
                        <div className="col-6">{data.userName}</div>
                        <div className="col-6">City :</div>
                        <div className="col-6">{data.city}</div>
                        <div className="col-6">State :</div>
                        <div className="col-6">{data.state}</div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">Distributor Name :</div>
                        <div className="col-6">{data.distributorName}</div>
                        <div className="col-6">Distributor no.:</div>
                        <div className="col-6">{data.distributorNo}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmBooking;