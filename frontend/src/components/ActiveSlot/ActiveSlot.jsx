import React from "react";
import './ActiveSlot.css';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { UserContext } from "../../store/user";
import { MarkDoneContext } from "../../store/markDone";
import { setMarkDone } from "../../actions/markDone";

const ActiveSlot = ({ id, details, image, time, status }) => {

    const { user, dispatchUser } = React.useContext(UserContext);
    
    const { markDone, dispatchMarkDone } = React.useContext(MarkDoneContext);
    const handleChange = async () => {

         try {
             
            const res = await fetch(`http://localhost:5000/distributer/${user.user.id}/activeBookedSlots/${id}/markDone`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });
            console.log(res.json());
            dispatchMarkDone(setMarkDone())
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TableRow>
            <TableCell align="center">{id}</TableCell>
            <TableCell align="center">{details}</TableCell>
            <TableCell align="center">{image}</TableCell>
            <TableCell align="center">{time}</TableCell>
            <TableCell align="center">
                {status ? status : 
                <Checkbox 
                    color="secondary"
                    onClick={handleChange}
                 />}
            </TableCell>
        </TableRow>
    );
}

export default ActiveSlot;