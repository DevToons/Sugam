import React from "react";
import DistributorDetails from "../../components/DistributorDetails/DistributorDetails";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { distributorData } from "../../data/distributorData";
import './DistributorDetailsPage.css';

const DistributorDetailsPage = () => {

    const { distributorId } = useParams();

    const details = distributorData.find((data) => ( data.id==distributorId ));

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
