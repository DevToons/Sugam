import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import './UserRegistrationPage.css';

const UserRegistrationPage = () => {

    const [ details, setDetails ] = React.useState({
        name: '',
        rationNo: '',
        city: '',
        state: ''
    });

    const [ authToken, setAuthToken ] = React.useState('');
    const [ states, setStates ] = React.useState([]);
    const [ cities, setCities ] = React.useState([]);

    React.useEffect(() => {

        axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
            headers: {
                "Accept": "application/json",
                "api-token": process.env.REACT_APP_STATE_API_TOKEN,
                "user-email": process.env.REACT_APP_EMAIL_ID
            }
        }).then((data) => {
            setAuthToken(data.data.auth_token);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    React.useEffect(() => {

        axios.get('https://www.universal-tutorial.com/api/states/India', {
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Accept": "application/json"
            }
        }).then((data) => {
            setStates(data.data);
        }).catch((error) => {
            console.log(error);
        });

    }, [authToken]);

    React.useEffect(() => {

        axios.get(`https://www.universal-tutorial.com/api/cities/${details.state}`, {
            headers: {
                "Authorization": `Bearer ${authToken}`,
                "Accept": "application/json"
            }
        }).then((data) => {
            setCities(data.data);
        }).catch((error) => {
            console.log(error);
        });

    }, [authToken, details.state]);


    const handleChange = (e) => {

        const { name, value } = e.target;

        setDetails((prevState) => (
            {
                ...prevState,
                [name]: value,
            }
        ));
    }

    const handleSubmit = (e) => {
        
        console.log(details);

        setDetails({
            name: '',
            rationNo: '',
            city: '',
            state: ''
        });
    }

    return (
        <>
            <div className="signup-box">

                <h1>User Registration</h1>
            
                <TextField
                    label="Enter Ration Card Number"
                    size="small"
                    name="rationNo"
                    value={details.rationNo}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Enter Name"
                    size="small"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField 
                    label="Select State" 
                    margin="dense"
                    size="small"
                    name="state"
                    select
                    fullWidth
                    value={details.state} 
                    onChange={handleChange}
                >
                    {
                        states.map((state, index) => (
                            <MenuItem key={index} value={state.state_name}>{state.state_name}</MenuItem>
                        ))
                    }
                </TextField>

                <TextField 
                    label="Select City" 
                    margin="dense"
                    size="small"
                    name="city"
                    select
                    fullWidth
                    value={details.city} 
                    onChange={handleChange}
                >
                    {
                        cities.map((city, index) => (
                            <MenuItem key={index} value={city.city_name}>{city.city_name}</MenuItem>
                        ))
                    }
                </TextField>

                <Button 
                    variant="contained" 
                    onClick={handleSubmit}
                    fullWidth
                >Verify & Proceed</Button>

            </div>
        </>
    );
}

export default UserRegistrationPage;
