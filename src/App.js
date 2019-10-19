import React from 'react';
import './App.css';
import {Header, Footer} from "./components/common";
import List from "./components/List/List";
import {Router} from "@reach/router"
import Detail from "./components/Detail/Detail";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <List default path={"/"}/>
                <Detail path={"/show/:id"}/>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
