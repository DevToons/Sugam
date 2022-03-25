import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { bookSlotData } from "../../data/bookSlotData";
import './ActiveSlotsPage.css';
import moment from 'moment';
import ActiveSlot from "../../components/ActiveSlot/ActiveSlot";
import { useParams } from "react-router-dom";
import { UserContext } from "../../store/user";

const ActiveSlotsPage = () => {

    const { user, dispatchUser } = React.useContext(UserContext);

    const { distributorId } = useParams();

/**
 * 
 *  get request that will fetch all the active slots from for this particular distributor
 * 
 */

    const [ bookSlotData, setBookSlotData ] = React.useState([]);

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/distributer/${distributorId}/activeSlots`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });

            const data = await res.json();

            setBookSlotData(data);
        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <div className="active-slot-page">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <ActiveSlot
                            id="Slot Id"
                            details="User Details"
                            image="User Image"
                            time="Slot time"
                            status="Status"
                         />
                    </TableHead>

                    <TableBody>
                        {
                            bookSlotData.map((slot, index) => (
                                <ActiveSlot
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    distributorId={distributorId}
                                    id={slot.id}
                                    details={`
                                        Name: ${slot.userName}
                                        Ration No.: ${slot.rationNum}
                                    `}
                                    image={
                                        <img 
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                                        alt=""
                                        />
                                    }
                                    time={`
                                        Date: ${moment(new Date(slot.date).getTime()).format('MMMM Do YYYY')}
                                        Time: ${slot.time.hour} : ${slot.time.minutes}
                                    `}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ActiveSlotsPage;