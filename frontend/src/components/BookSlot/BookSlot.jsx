import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
import './BookSlot.css';

const BookSlot = () => {

    /**
     * get request that will fetch the dates of the slots created by the user's distributor (send distributor details)
     * 
     */

    const slots = [{
        hour: 12,
        min: 20
    },{
        hour: 1,
        min: 20
    },{
        hour: 2,
        min: 20
    },{
        hour: 3,
        min: 20
    },{
        hour: 4,
        min: 20
    },{
        hour: 5,
        min: 20
    }];

    const [date, setDate] = React.useState(new Date());

    const onSelectDate = (newDate) => {
        setDate(newDate)
    }

    const handleSubmit = () => {
        console.log(date);
    }

    return (
        <div className="book-slot-box">

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="row">

                    <div className="col-md-6">
                        <CalendarPicker 
                            // shouldDisableDate={disableDates}
                            className="create-slot-calendar"
                            date={date} 
                            onChange={onSelectDate}
                        />
                    </div>

                    <div className="col-md-6 time-slot-container">

                        {
                            slots.map((slot, index) => (
                                <div key={index} className="time-slot" onClick={() => {
                                    console.log(slot)
                                }} >
                                    {slot.hour} : {slot.min}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </LocalizationProvider>

            <Button 
                className="create-slot-button"
                variant="contained" 
                onClick={handleSubmit}
            >Book Slot</Button>
        </div>
    );
}

export default BookSlot;