import React from "react";
import BookSlot from "../../components/BookSlot/BookSlot";
import ConfirmBooking from "../../components/ConfirmBooking/ConfirmBooking";

const BookSlotPage = () => {
    return (

        <div className="book-slot-page">
            <BookSlot />
            <ConfirmBooking />
        </div>
    );
}

export default BookSlotPage;