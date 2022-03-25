import React from "react";
import DistributorDetails from "../../components/DistributorDetails/DistributorDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { distributorData } from "../../data/distributorData";
import './DistributorDetailsPage.css';
import { UserContext } from "../../store/user";

const DistributorDetailsPage = () => {

    const { user, dispatchUser } = React.useContext(UserContext);

    const { distributorId } = useParams();

    const [ details, setDetails ] = React.useState({});

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/distributer/${distributorId}/dashboard`, {
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
            <DistributorDetails details={details} />

            <Button 
                variant="contained" 
                onClick={() => {
                    navigate(`/distributor/${distributorId}/activeSlots`)
                }}
            >Active Slots</Button>

            <Button 
                variant="contained" 
                onClick={() => {
                    navigate(`/distributor/${distributorId}/createSlots`)
                }}
            >Create Slots</Button>
        </>
    );
}

export default DistributorDetailsPage;
