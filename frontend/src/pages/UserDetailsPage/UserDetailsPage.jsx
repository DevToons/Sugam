import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { UserContext } from "../../store/user";
import './UserDetailsPage.css';

const UserDetailsPage = () => {

    const { user, dispatchUser } = React.useContext(UserContext);

    const { userId } = useParams();

    const [ details, setDetails ] = React.useState({});

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/distributer/${userId}/dashboard`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });

            const data = await res.json();

            setDetails(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

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
