import React from "react";
import './CreateSlotPage.css';
import CreateSlot from '../../components/CreateSlot/CreateSlot';
import Button from '@mui/material/Button';

const CreateSlotPage = () => {

    const [ slots, createSlots ] = React.useState([<CreateSlot key={0} />]);

    const handleSubmit = () => {
        createSlots((prevState) => ([
            ...prevState,
            <CreateSlot key={slots.length} />
        ]));
    }

    return (
        <div className="create-slot-page">
            {slots}

            <Button 
                className="create-slot-button"
                variant="contained" 
                onClick={handleSubmit}
            >Add Slot</Button>
        </div>
    );
}

export default CreateSlotPage;