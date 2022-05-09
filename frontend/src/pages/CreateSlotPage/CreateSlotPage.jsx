import React from "react";
import { Link } from "react-router-dom";
import './CreateSlotPage.css';
import CreateSlot from '../../components/CreateSlot/CreateSlot';
import Button from '@mui/material/Button';

const CreateSlotPage = () => {

    const [slots, createSlots] = React.useState([<CreateSlot key={0} />]);

    const handleSubmit = () => {
        createSlots((prevState) => ([
            ...prevState,
            <CreateSlot key={slots.length} />
        ]));
    }

    return (
        <div className="create-slot-page">
            {slots}
            <Link to="/distributor/1/details">
                <Button className="create-slot-button" variant="contained">
                    Go Back
                </Button>
            </Link>
            <Button
                className="slot-button "
                variant="contained"
                onClick={handleSubmit}
            >Add Slot</Button>
        </div>
    );
}

export default CreateSlotPage;