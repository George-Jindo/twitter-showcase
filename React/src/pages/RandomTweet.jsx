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
            screenName: '',
            user: favorites,
            randomTweet: null,
            showResults: false
        };
    }

    /*updateScreenName(event) {
        this.setState({ screenName: event.target.value });
        console.log(event.target.value);
    }*/

    onClickHandler = (event) => {
        this.setState({
            showResults: true
        });

        axios.get(`http://localhost:5000/api/random?screen_name=${event.target.value}`)
            .then(response => {
                console.log({ randomTweet: response.data });
                this.setState({ randomTweet: response.data });
            })
            .catch(error => {
                console.log("Error Message: " + error);
            });

    };

    resultsCloseHandler = () => {
        this.setState({
            showResults: false
        });
    };


    render() {
        const favorites = this.state.user;

        return (
            <div style={{ marginTop: '75px', width: '100%', height: '100%' }}>
                <section>
                    <div className="container">
                        <h1 className="heading">Random Tweets</h1>
                        <div className="card-wrapper">
                            <div className="card">
                                <img src="./images/kinggeorge.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[0].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[0].user.name}</h1>
                                <p className="screen-name">@{favorites[0].user.screen_name}</p>
                                <button
                                    className="btn-rnd"
                                    value="kinggeorge"
                                    onClick={this.onClickHandler}
                                    onClose={this.resultsCloseHandler}
                                >
                                    Reveal Tweet
                                </button>
                                {this.state.showResults && this.state.randomTweet !== null && (
                                    <div className="show-results" onClose={this.resultsCloseHandler}>
                                        {<button className="btn-modal-1" onClick={this.resultsCloseHandler}>Hide Tweet</button>}
                                        <p className="about">{this.state.randomTweet.text}</p>
                                    </div>
                                )}
                            </div>

                            <div className="card">
                                <img src="./images/ign.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[1].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[1].user.name}</h1>
                                <p className="screen-name">@{favorites[1].user.screen_name}</p>
                                <button
                                    className="btn-rnd"
                                    value="ign"
                                    onClick={this.onClickHandler}
                                    onClose={this.resultsCloseHandler}
                                >
                                    Reveal Tweet
                                </button>
                                {this.state.showResults && this.state.randomTweet !== null && (
                                    <div className="show-results" onClose={this.resultsCloseHandler}>
                                        {<button className="btn-modal-2" onClick={this.resultsCloseHandler}>Hide Tweet</button>}
                                        <p className="about">{this.state.randomTweet.text}</p>
                                    </div>
                                )}
                            </div>

                            <div className="card">
                                <img src="./images/SMii7y.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[2].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[2].user.name}</h1>
                                <p className="screen-name">@{favorites[2].user.screen_name}</p>
                                <button
                                    className="btn-rnd"
                                    value="SMii7y"
                                    onClick={this.onClickHandler}
                                    onClose={this.resultsCloseHandler}
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/elonmusk.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[3].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[3].user.name}</h1>
                                <p className="screen-name">@{favorites[3].user.screen_name}</p>
                                <button
                                    className="btn-rnd"
                                    value="elonmusk"
                                    onClick={this.onClickHandler}
                                    onClose={this.resultsCloseHandler}
                                >
                                    Reveal Tweet
                                </button>
                            </div>

                            <div className="card">
                                <img src="./images/rainbow6.jpg" alt="banner" className="card-img"></img>
                                <img src={favorites[4].user.profile_image_url_https} alt="profile image" className="profile-img"></img>
                                <h1>{favorites[4].user.name}</h1>
                                <p className="screen-name">@{favorites[4].user.screen_name}</p>
                                <button
                                    className="btn-rnd"
                                    value="rainbow6game"
                                    onClick={this.onClickHandler}
                                    onClose={this.resultsCloseHandler}
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