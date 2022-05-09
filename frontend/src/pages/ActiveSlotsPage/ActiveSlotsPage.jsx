import React from "react";
import { Link } from "react-router-dom";
import './ActiveSlotsPage.css';
import { MarkDoneContext } from "../../store/markDone";
import ActiveSlotsTable from "../../components/ActiveSlotsTable/ActiveSlotsTable";
import markDoneReducer from "../../reducer/markDone";

const ActiveSlotsPage = () => {

    const [markDone, dispatchMarkDone] = React.useReducer(markDoneReducer, true);

    const provider = {
        markDone,
        dispatchMarkDone
    }

    return (
        <MarkDoneContext.Provider value={provider}>
            <div className="active-slot-page">
                <ActiveSlotsTable />
            </div>
            <Link to="/distributor/1/details">
                <Button className="create-slot-button" variant="contained">
                    Go Back
                </Button>
            </Link>
        </MarkDoneContext.Provider>
    );
}

export default ActiveSlotsPage;