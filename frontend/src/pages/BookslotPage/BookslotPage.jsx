import React from "react";
import BookSlot from "../../components/BookSlot/BookSlot";
import ConfirmBooking from "../../components/ConfirmBooking/ConfirmBooking";
import { slotReducer } from "../../reducer/slot";
import { SlotContext } from "../../store/slot";

const BookSlotPage = () => {

    const [ bookedSlot, dispatchBookedSlot ] = React.useReducer(slotReducer, {
        date:'',
        startTime:0
    });

    const provider = {
        bookedSlot,
        dispatchBookedSlot
    };

    return (

        <SlotContext.Provider value={provider}>
            <div className="book-slot-page">
                <BookSlot />
                <ConfirmBooking />
            </div>
        </SlotContext.Provider>
    );
}

export default BookSlotPage;