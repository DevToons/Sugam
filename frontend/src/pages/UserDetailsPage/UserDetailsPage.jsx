import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { UserContext } from "../../store/user";
import './UserDetailsPage.css';
import { UserDetailsContext } from "../../store/userDetails";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { setDistributorDetails } from "../../actions/distributorDetails";
import {setUserDetails} from "../../actions/userDetails"

const UserDetailsPage = () => {

    const { user } = React.useContext(UserContext);
    const { dispatchUserDetails,userDetails } = React.useContext(UserDetailsContext);

    const [isLoading, doneLoading] = React.useState(true);

    const navigate=useNavigate();

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/user/${user.user.uid}/dashboard`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });

            const data = await res.json();
            console.log(data)

            if (data.message) {
                navigate(`/user/${user.user.uid}/register`);
            }

            dispatchUserDetails(setUserDetails(data));

            doneLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log(userDetails)
    return (
        <>
            {
                isLoading ? <Loading /> : 

                <div className="userbody">
                    <UserDetails />

                    <Button 
                        variant="contained" 
                        onClick={() => {
                            navigate(`/user/${user.user.uid}/bookSlot`)
                        }}
                    >Book Slot</Button>
                </div>
            }
        </>
    );
}

export default UserDetailsPage;
