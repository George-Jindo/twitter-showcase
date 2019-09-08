import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import axios from "axios";
import './RandomTweet.css';
import favorites from "../favoriteUsers.js";

console.log(favorites);


class RandomTweet extends Component {
    constructor() {
        super();
        this.state = {
            user: favorites,
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
        const favorites = this.state.user;

        return (
            <div style={{ marginTop: '75px', width: '100%', height: '100%' }}>
                <section>
                    <div className="container">
                        <h1 className="heading">My Favorite Users</h1>
                        <div className="card-wrapper">
                            <div className="card">
                                <img src="./images/kinggeorge.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[0].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[0].user.name}</h1>
                                <p className="screen-name">@{favorites[0].user.screen_name}</p>
                                <p className="about">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                                <button
                                    className="btn-rnd"
                                    value="kinggeorge"
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/ign.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[1].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[1].user.name}</h1>
                                <p className="screen-name">@{favorites[1].user.screen_name}</p>
                                <p className="about">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                                <button
                                    className="btn-rnd"
                                    value="ign"
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/SMii7y.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[2].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[2].user.name}</h1>
                                <p className="screen-name">@{favorites[2].user.screen_name}</p>
                                <p className="about">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                                <button
                                    className="btn-rnd"
                                    value="SMii7y"
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/elonmusk.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[3].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[3].user.name}</h1>
                                <p className="screen-name">@{favorites[3].user.screen_name}</p>
                                <p className="about">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                                <button
                                    className="btn-rnd"
                                    value="elonmusk"
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/rainbow6.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[4].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[4].user.name}</h1>
                                <p className="screen-name">@{favorites[4].user.screen_name}</p>
                                <p className="about">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC,
                                    making it over 2000 years old.
                                </p>
                                <button
                                    className="btn-rnd"
                                    value="rainbow6game"
                                >
                                    Reveal Tweet
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}

export default RandomTweet;