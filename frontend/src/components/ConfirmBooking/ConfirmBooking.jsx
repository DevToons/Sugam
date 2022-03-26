import React from "react";
import './ConfirmBooking.css';
import  { bookSlotData } from '../../data/bookSlotData';
import { SlotContext } from "../../store/slot";
import { UserContext } from "../../store/user";

const ConfirmBooking = () => {

    const { bookedSlot, dispatchBookedSlot } = React.useContext(SlotContext);
    const { user, dispatchUser } = React.useContext(UserContext);

    return (
        <div className="confirm-booking-box">
            <div className="row">

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">Ration Card no. :</div>
                        <div className="col-6">{user.rationNo}</div>
                        <div className="col-6">Name :</div>
                        <div className="col-6">{user.name}</div>
                        <div className="col-6">City :</div>
                        <div className="col-6">{user.city}</div>
                        <div className="col-6">State :</div>
                        <div className="col-6">{user.state}</div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">Distributor Name :</div>
                        <div className="col-6">{user.distributorName}</div>
                        <div className="col-6">Distributor no.:</div>
                        <div className="col-6">{user.distributorNo}</div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6">Date :</div>
                        <div className="col-6">{bookedSlot.date}</div>
                        <div className="col-6">Time:</div>
                        <div className="col-6">{bookedSlot.startTime}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmBooking;