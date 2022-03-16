import React from "react";
import Routing from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <BrowserRouter>
            <h1>Sugam</h1>
            <Header />
            <Routing />
        </BrowserRouter>
    );
}

export default App;
