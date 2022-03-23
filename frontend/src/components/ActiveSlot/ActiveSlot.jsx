import React from "react";
import './ActiveSlot.css';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

const ActiveSlot = ({ id, details, image, time, status }) => {

    const handleChange = () => {
        /**
         * 
         * a delete request that will delete this slot from the database
         */
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