import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
import moment from 'moment';
import './BookSlot.css';
import { UserContext } from "../../store/user";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { SlotContext } from "../../store/slot";
import { bookSlot } from "../../actions/slot";
import { ToastContainer, toast } from 'react-toastify';

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
            const res = await fetch(`https://sugam-backend.herokuapp.com/user/${user.user.uid}/getSlots`, {
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

        const day = new Date(date).getDate();
        const month = new Date(date).getMonth();
        const year = new Date(date).getFullYear();
        

        const temp = slots.filter((slot) => {
            return day===slot.date && month===slot.month && year===slot.year && slot.count>0
        });

        setTimeSlots(temp);

    }, [date]);

    

    const onSelectDate = (newDate) => {
        setDate(newDate)
    }

    const handleSubmit = async () => {

        try {
            const res = await fetch(`https://sugam-backend.herokuapp.com/user/${user.user.uid}/bookSlot`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
                body : JSON.stringify({
                    date : date.getDate(),
                    month : date.getMonth(),
                    year : date.getFullYear(),
                    startTime: time
                })
            });
            const data = await res.json();
            alert("Slot Booked Successfully")

            dispatchBookedSlot(bookSlot({
                date : date.getDate(),
                month : date.getMonth(),
                year : date.getFullYear(),
                startTime: time
            }));

            toast.success("Successfully booked!", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });

        } catch (error) {
            console.log(error);

            toast.error("Error! Try Again.", {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored'
            });
        }

    }

    const disableDates = (date) => {
        
        const currentDate = date.getDate();
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();

        const slot = slots.find((slot) => (
            slot.date===currentDate && slot.month===currentMonth && slot.year===currentYear
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

                                        }}
                                         >
                                             {moment(slot.startTime).format('LT')}
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

            <ToastContainer />
        </>
    );
}

export default BookSlot;