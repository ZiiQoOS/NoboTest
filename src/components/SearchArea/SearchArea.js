import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import './SearchArea.css';

import {FloatingButton} from "../common";

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showName: ''
        }
    }


    sendData() {
        this.props.parentCallback(this.state.showName);
    }


    changeValue(event) {
        const {value} = event.target;
        this.setState({showName: value});
    }

    getShowList(showName) {
        this.sendData(showName);
    }

    render() {
        return (
            <div className={"container"}>
                <TextField
                    id="outlined-search"
                    label="Show Name"
                    type="search"
                    className="textField"
                    margin="normal"
                    onChange={(event) => this.changeValue(event)}
                    variant="outlined"
                />
                <FloatingButton onClick={this.getShowList.bind(this, this.state.showName)}/>
            </div>
        );
    }
}

export default SearchArea;
