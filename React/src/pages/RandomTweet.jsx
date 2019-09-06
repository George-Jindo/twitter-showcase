import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import axios from "axios";
import favorites from "../favoriteUsers.js";


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
                console.log({ tweets: response.data });
                //this.setState({ tweets: response.data });
            })
            .catch(error => {
                console.log("Error Message: " + error);
            });

    };

    render() {

        return (
            <div style={{ marginTop: '75px', width: '100%', height: '100%' }}>
                <section>
                    <div className="container">
                        <h1 className="heading">My Favorite Users</h1>
                        <div className="card-wrapper">
                            <div className="card">
                                <img src="./images/kinggeorge.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites.user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}

export default RandomTweet;