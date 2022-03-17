import React from "react";import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
import './CreateSlot.css';

const CreateSlot = () => {    

    const [date, setDate] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);

    const handleSubmit = () => {
        console.log(date);
        console.log(startTime.getHours(), startTime.getMinutes());
        console.log(endTime.getHours(), endTime.getMinutes());
    }

    const disableDates = (date) => {
        return date.getTime()===new Date('Wed Mar 16 2022 00:00:00 GMT+0530').getTime();
    }

    return (
        <div className="create-slot-box">

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="row">

                    <div className="col-md-6">
                        <CalendarPicker 
                            shouldDisableDate={disableDates}
                            className="create-slot-calendar"
                            date={date} 
                            onChange={(newDate) => setDate(newDate)}
                        />
                    </div>

                    <div className="col-md-6">
                        <TimePicker
                            label="Start Time"
                            value={startTime}
                            onChange={(newValue) => {
                                setStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField 
                                className="create-slot-time"
                                size="small"
                                {...params}
                            />}
                        />

                        <TimePicker
                            label="End Time"
                            value={endTime}
                            onChange={(newValue) => {
                                setEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField 
                                className="create-slot-time"
                                size="small"
                                {...params}
                            />}
                        />
                    </div>
                </div>
            </LocalizationProvider>

            <Button 
                className="create-slot-button"
                variant="contained" 
                onClick={handleSubmit}
            >Create</Button>
        </div>
    );
}

export default CreateSlot;