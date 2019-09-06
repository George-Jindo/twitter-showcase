import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import axios from "axios";
import favorites from "../favoriteUsers";


class RandomTweet extends Component {
    constructor() {
        super();
        this.state = {
            users: favorites,
            tweets: []
        };
    }

    onClickHandler = () => {
        axios.get('http://localhost:5000/api/random/')
            .then(response => {
                console.log('data: ', response.data.data);
                //this.setState({ tweets: response.data });
            })
            .catch(error => {
                console.log("Error Message: " + error);
            });

    };

    render() {

        return (
            <div style={{ marginTop: '75px', width: '100%', height: '100%' }}>
                <div className="favorite_users">

                    <button
                        className="individual_user"
                        onClick={this.onClickHandler}
                    >
                        Test Button
                    </button>

                </div>

            </div>

        );
    }
}

export default RandomTweet;