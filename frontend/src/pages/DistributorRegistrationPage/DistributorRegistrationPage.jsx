import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem from '@mui/material/MenuItem';
import './DistributorRegistrationPage.css';
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { UserContext } from "../../store/user";
import { useNavigate } from "react-router-dom";

const DistributorRegistrationPage = () => {

    const { user, dispatchUser } = React.useContext(UserContext);

    const [details, setDetails] = React.useState({
        name: '',
        number: '',
        city: '',
        state: ''
    });

    const [authToken, setAuthToken] = React.useState('');
    const [states, setStates] = React.useState([]);
    const [cities, setCities] = React.useState([]);
    const [isLoading, doneLoading] = React.useState(true);

    const navigate = useNavigate();

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
            doneLoading(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(details);

        try {
            const res = await fetch(`https://sugam-backend.herokuapp.com/distributer/${user.user.uid}/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + user.token.token,
                },
                mode: "cors",
                body: JSON.stringify({
                    name: details.name,
                    number: details.number,
                    city: details.city,
                    state: details.state
                })
            });

            console.log(res.json());
            navigate(`/distributor/${user.user.uid}/details`);
        } catch (e) {
            console.log(e)
        }

        setDetails({
            name: '',
            number: '',
            city: '',
            state: ''
        });
    }

    return (
        <>

            {
                isLoading ? <Loading /> :
                    <div className="h-full py-16 px-4">
                    <div className="bg-grey-lighter min-h-screen flex flex-col con1">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 con2">
                            <h3 className="text-2xl font-extrabold leading-6 my-5 text-black head-text">Sugam</h3>
                            <div className="space-x-2">
                                <h1 className="mb-8 text-3xl text-center">Register</h1>
                                <h1 className="mb-8 text-3xl text-center">(Distributer)</h1>
                                <h4 className="mb-8 text-3xl text-center field subtext">Enter the verified Distributer Name and Number of your Ration shop</h4>
                            </div>
                            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md con3">
                                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-2 border-gray-300 con4">
                                    <form
                                        className="space-y-6"
                                    >
                                        <div className="field">
                                            <label
                                                for="ration"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Distributer Number
                                            </label>
                                            <TextField
                                                id="ration"
                                                size="small"
                                                name="number"
                                                value={details.rationNo}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </div>

                                        <div className="field">
                                            <label
                                                for="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Distributer Number
                                            </label>
                                            <TextField
                                                id="name"
                                                size="small"
                                                name="name"
                                                value={details.name}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                        </div>
                                        <div className="field">
                                            <label
                                                for="state"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Select State
                                            </label>
                                            <TextField
                                                id="state"
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
                                        </div>
                                        <div className="field">
                                            <label
                                                for="city"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Select City
                                            </label>
                                            <TextField
                                                id="city"
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
                                        </div>

                                        <div className="field">
                                            <button
                                                type="submit"
                                                className="btn"
                                                onClick={handleSubmit}
                                            >
                                                <p className="txt"> Register</p>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default DistributorRegistrationPage;
