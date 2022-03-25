import React from "react";
import Routing from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { UserContext } from "./store/user";
import { userReducer } from "./reducer/user";

const App = () => {

    const [ user, dispatchUser ] = React.useReducer(userReducer,null);

    const provider = {
        user,
        dispatchUser
    };

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
