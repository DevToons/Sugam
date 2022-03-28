import React from "react";
import "./ActiveSlotsTable.css";
import moment from 'moment';
import ActiveSlot from "../../components/ActiveSlot/ActiveSlot";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { MarkDoneContext } from "../../store/markDone";
import { setMarkDone } from "../../actions/markDone";
import { UserContext } from "../../store/user";
import { ReactComponent as Loading } from "../../assets/loading.svg";

const ActiveSlotsTable = () => {

    const { markDone, dispatchMarkDone } = React.useContext(MarkDoneContext);
    const { user, dispatchUser } = React.useContext(UserContext);

    const [bookSlotData, setBookSlotData] = React.useState([]);
    const [isLoading, doneLoading] = React.useState(true);

    React.useEffect(async () => {

        try {
            const res = await fetch(`https://sugam-backend.herokuapp.com/distributer/${user.user.uid}/activeBookedSlots`, {
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

            doneLoading(false);
        } catch (error) {
            console.log(error);
        }

    }, [markDone]);

    return (
        <>
            {
                isLoading ? <Loading /> : 

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
                                        id={slot._id}
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
                                        Date: ${moment(new Date(slot.year, slot.month, slot.date).getTime()).format('MMMM Do YYYY')}
                                        Time: ${moment(slot.time).format('LT')}
                                    `}
                                    />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    );
};

export default ActiveSlotsTable;