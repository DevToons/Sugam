import React from "react";
import Routing from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { UserContext } from "./store/user";
import { userReducer } from "./reducer/user";
import { auth } from "./firebase/firebase";
import { getIdTokenResult } from "firebase/auth";
import { storeToken } from "./actions/user";
import { userDetailsReducer } from "./reducer/userDetails";
import { distributorDetailsReducer } from "./reducer/distributorDetails";
import { DistributerDetailsContext } from "./store/distributorDetails";
import { UserDetailsContext } from "./store/userDetails";

const App = () => {

    const [user, dispatchUser] = React.useReducer(userReducer, null);
    const [userDetails, dispatchUserDetails] = React.useReducer(userDetailsReducer, {
        state: "",
        name: "",
        rationNo: "",
        city: "",
        image: "",
        uid: "",
        distributorName: "",
        distributorNo: ""
    });
    const [distributorDetails, dispatchDistributorDetails] = React.useReducer(distributorDetailsReducer, {
        city: "",
        image: "",
        name: "",
        number: "",
        state: "",
        uid: "",
    });

    const userProvider = {
        user,
        dispatchUser
    };
    const userDetailsProvider = {
        userDetails,
        dispatchUserDetails
    };
    const distributorDetailsProvider = {
        distributorDetails,
        dispatchDistributorDetails
    };

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {

            getIdTokenResult(user).then((token) => {
                console.log(token);
                dispatchUser(storeToken(token));
            });
        })
    }, []);

    return (

        <UserContext.Provider value={userProvider}>
            <DistributerDetailsContext.Provider value={distributorDetailsProvider}>
                <UserDetailsContext.Provider value={userDetailsProvider}>
                    <BrowserRouter>
                        <Header />
                        <Routing />
                    </BrowserRouter>
                </UserDetailsContext.Provider>
            </DistributerDetailsContext.Provider>
        </UserContext.Provider>
    );
}

export default App;