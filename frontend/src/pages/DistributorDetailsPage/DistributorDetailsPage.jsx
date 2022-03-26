import React from "react";
import DistributorDetails from "../../components/DistributorDetails/DistributorDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import './DistributorDetailsPage.css';
import { UserContext } from "../../store/user";
import { DistributerDetailsContext } from "../../store/distributorDetails";
import { ReactComponent as Loading } from "../../assets/loading.svg";

const DistributorDetailsPage = () => {

    const { user } = React.useContext(UserContext);
    const { dispatchDistributorDetails } = React.useContext(DistributerDetailsContext);

    const [isLoading, doneLoading] = React.useState(true);

    const navigate=useNavigate();

    React.useEffect(async () => {

        try {
            const res = await fetch(`http://localhost:5000/distributer/${user.user.uid}/dashboard`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
            });

            const data = await res.json();

            if (data.message) {
                navigate(`/distributor/${user.user.uid}/register`);
            }

            dispatchDistributorDetails(data);

            doneLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, []);

    

    return (
        <>
            {
                isLoading ? <Loading /> : 

                <>
                    <DistributorDetails />

                    <Button 
                        variant="contained" 
                        onClick={() => {
                            navigate(`/distributor/${user.user.uid}/activeSlots`)
                        }}
                    >Active Slots</Button>

                    <Button 
                        variant="contained" 
                        onClick={() => {
                            navigate(`/distributor/${user.user.uid}/createSlots`)
                        }}
                    >Create Slots</Button>
                </>
            }
        </>
    );
}

export default DistributorDetailsPage;