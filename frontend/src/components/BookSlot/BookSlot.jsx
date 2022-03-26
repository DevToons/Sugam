import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
import './BookSlot.css';
import { UserContext } from "../../store/user";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { SlotContext } from "../../store/slot";
import { bookSlot } from "../../actions/slot";

const BookSlot = () => {

    /**
     * get request that will fetch the dates of the slots created by the user's distributor (send distributor details)
     * 
     */

    const [isLoading, doneLoading] = React.useState(true);
    const { user, dispatchUser } = React.useContext(UserContext);
    const { dispatchBookedSlot } = React.useContext(SlotContext);

    const [ slots, setSlots ] = React.useState([]);
    const [ timeSlots, setTimeSlots ] = React.useState([]);

    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(0);

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/user/${user.user.uid}/getSlots`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });

            const data = await res.json();

            setSlots(data);

            doneLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {

        const temp = slots.filter((slot) => (
            slot.date.getTime()===date.getTime()
        ));

        setTimeSlots(temp);

    }, [date]);

    

    const onSelectDate = (newDate) => {
        setDate(newDate)
    }

    const handleSubmit = async () => {
        console.log(date, time);

        try {
            const res = await fetch(`http://localhost:5000/user/${user.user.uid}/bookSlot`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
                body : JSON.stringify({
                    date,
                    startTime: time
                })
            });

            const data = await res.json();

            console.log(data);

            dispatchBookedSlot(bookSlot({ date, startTime: time}));
        } catch (error) {
            console.log(error);
        }

    }

    const disableDates = (date) => {
        const currentDate = date.getTime();

        const slot = slots.find((slot) => (
            slot.date.getTime()===currentDate && slot.count!==0
        ));

        return slot===undefined;
    }

    return (

        <>
            {
                isLoading ? <Loading /> : 
                <div className="book-slot-box">

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <div className="row">

                            <div className="col-md-6">
                                <CalendarPicker 
                                    shouldDisableDate={disableDates}
                                    className="create-slot-calendar"
                                    date={date} 
                                    onChange={onSelectDate}
                                />
                            </div>

                            <div className="col-md-6 time-slot-container">

                                {
                                    timeSlots.map((slot, index) => (
                                        <div key={index} className="time-slot" onClick={() => {
                                            setTime(slot.startTime)
                                        }} >
                                            {slot.startTime}
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
            }
        </>
    );
}

export default BookSlot;