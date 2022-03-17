import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../data/userData";
import './UserDetailsPage.css';

const UserDetailsPage = () => {

    const { userId } = useParams();

    const details = userData.find((data) => ( data.id==userId ));

    const navigate=useNavigate();

    return (
        <>
            <UserDetails details={details} />

            <Button 
                variant="contained" 
                onClick={() => {
                    navigate(`/user/${userId}/bookSlot`)
                }}
            >Book Slot</Button>
        </>
    );
}

export default UserDetailsPage;
