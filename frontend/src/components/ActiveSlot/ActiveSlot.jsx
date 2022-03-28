import React from "react";
import './ActiveSlot.css';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { UserContext } from "../../store/user";
import { MarkDoneContext } from "../../store/markDone";
import { setMarkDone } from "../../actions/markDone";
import { ToastContainer, toast } from 'react-toastify';

const ActiveSlot = ({ id, details, image, time, status }) => {

    const { user, dispatchUser } = React.useContext(UserContext);
    
    const { markDone, dispatchMarkDone } = React.useContext(MarkDoneContext);
    const handleChange = async () => {

         try {
             
            const res = await fetch(`https://sugam-backend.herokuapp.com/distributer/${user.user.uid}/activeBookedSlots/${id}/markDone`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });
            console.log(res.json());
            dispatchMarkDone(setMarkDone());

            toast.success("Successfully marked done!", {
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

    return (
        <>
            <ToastContainer />

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
        </>
    );
}

export default ActiveSlot;