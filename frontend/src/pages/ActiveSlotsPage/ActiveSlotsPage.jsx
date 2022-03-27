import React from "react";
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
        </MarkDoneContext.Provider>
    );
}

export default ActiveSlotsPage;