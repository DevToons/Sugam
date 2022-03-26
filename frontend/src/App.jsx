import React from "react";
import Routing from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { UserContext } from "./store/user";
import { userReducer } from "./reducer/user";
import { auth } from "./firebase/firebase";
import { getIdTokenResult } from "firebase/auth";
import { storeToken } from "./actions/user";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    const [ user, dispatchUser ] = React.useReducer(userReducer,null);

    const provider = {
        user,
        dispatchUser
    };

    React.useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
        
            getIdTokenResult(user).then((token)=>{
                console.log(token);
                dispatchUser(storeToken(token));
            });
        })
    }, []);

    return (
        
        <UserContext.Provider value={provider}>
            <BrowserRouter>
                <h1>Sugam</h1>
                <Header />
                <Routing />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;