import React, {Component} from 'react';
import {API_URL_GET_ONE} from '../../config';
import axios from "axios";
import Utils from '../../utils/Utils';
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieDetail from "../common/MovieDetail/MovieDetail";

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: {}
        }
    }


    componentDidMount() {
        axios.get(`${API_URL_GET_ONE}/${this.props.id}`)
            .then(res => {
                const show = res.data;
                this.setState({show});
            });
    }


    render() {
        const {show} = this.state;
        if (!Utils.isEmpty(show)) {
            console.log(show);
            return (
                <MovieDetail
                    key={show.id}
                    show={show}
                />
            );
        }
        return (
            <CircularProgress/>
        )
    }
}

export default Detail;
