import React from "react";
import './ConfirmBooking.css';
import { bookSlotData } from '../../data/bookSlotData';
import { SlotContext } from "../../store/slot";
import { UserContext } from "../../store/user";
import moment from 'moment';
import { UserDetailsContext } from "../../store/userDetails";

const ConfirmBooking = () => {

    const { bookedSlot, dispatchBookedSlot } = React.useContext(SlotContext);
    // const { user, dispatchUser } = React.useContext(UserContext);
    const { user, dispatchUser } = React.useContext(UserContext);
    const { userDetails, dispatchUserDetails } = React.useContext(UserDetailsContext);
    const date = moment(new Date(bookedSlot.year, bookedSlot.month, bookedSlot.date).getTime()).format('MMMM Do YYYY')
    const time = moment(bookedSlot.startTime).format('LT')

    const reciptHandler = async (e) => {
        const to = user.user.phoneNumber;
        const body = `
        Slot booked successfully!
        Name : ${userDetails.name}
        Ration Number : ${userDetails.rationNo}
        Distributer Name : ${userDetails.distributorName}
        Distributer Number : ${userDetails.distributorNo}
        City : ${userDetails.city}
        State : ${userDetails.state}
        Date : ${date}
        Time : ${time}
        `
        try {
            const res = await fetch(`http://localhost:5000/user/${user.user.uid}/generateReceipt`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
                body: JSON.stringify({
                    to,
                    body
                })
            });

            console.log(res.json());
            // navigate(`/distributor/${user.user.uid}/details`);
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <div>
            <div className="confirm-booking-box outcon">
                <div className="row space-x-2">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">Ration Card no. :</div>
                            <div className="col-6">{userDetails.rationNo}</div>
                            <div className="col-6">Name :</div>
                            <div className="col-6">{userDetails.name}</div>
                            <div className="col-6">City :</div>
                            <div className="col-6">{userDetails.city}</div>
                            <div className="col-6">State :</div>
                            <div className="col-6">{userDetails.state}</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">Distributor Name :</div>
                            <div className="col-6">{userDetails.distributorName}</div>
                            <div className="col-6">Distributor no.:</div>
                            <div className="col-6">{userDetails.distributorNo}</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">Date :</div>
                            <div className="col-6">{date}</div>
                            <div className="col-6">Time:</div>
                            <div className="col-6">{time}</div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="confirmBtn" onClick={reciptHandler}>
                Generate Recipt
            </button>
        </div>

    );
}

export default ConfirmBooking;