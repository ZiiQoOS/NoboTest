import React, {Component} from 'react';
import './List.css';
import axios from 'axios';
import {API_URL_SEARCH, IMAGE_PLACE_HOLDER} from '../../config'
import SearchArea from "../SearchArea/SearchArea";
import {MovieCard} from "../common";
import {navigate} from "@reach/router"


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: '',
            shows: []
        };
    }


    getShowList(showName) {
        this.setState({q: showName});
        axios.get(`${API_URL_SEARCH}`, {
            params: {
                q: showName
            }
        })
            .then(res => {
                const shows = res.data;
                this.setState({shows});
            });

    }

    getShowDetail(id) {
        console.log(id);
        navigate(`/show/${id}`);

    }

    callbackFunction(showName) {
        this.getShowList(showName);
    }


    render() {
        return (
            <div>
                <SearchArea parentCallback={this.callbackFunction.bind(this)}/>

                <div className={"listContainer"}>
                    {
                        this.state.shows.map(info =>
                            <MovieCard
                                key={info.show.id}
                                image={((info.show.image) ? info.show.image.medium : IMAGE_PLACE_HOLDER)}
                                title={info.show.name}
                                onClick={this.getShowDetail.bind(this, info.show.id)}
                            />
                        )
                    }
                </div>

            </div>

        );
    }
}

export default List;
