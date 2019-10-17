import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Header, Footer} from "./components/common";

function App() {
    return (
        <div className="App">
            <Header>Header</Header>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Footer>Footer</Footer>
        </div>
    );
}

export default App;
