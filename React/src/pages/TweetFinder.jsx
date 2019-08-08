import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './TweetFinder.css';

import Backdrop from '../components/Backdrop/Backdrop';
import Modal from '../components/Modal/Modal';

class TweetFinder extends Component {
    // Handle Change for user input on search field
    handleChange(event) {
        this.setState({ input: event.target.value })
    }


    state = {
        searching: false
    };

    startSearchingHandler = () => {
        this.setState({ searching: true });

        /*const headers = new Headers();

        headers.set(
            'Authorization',
            'AAAAAAAAAAAAAAAAAAAAACQn%2FAAAAAAA5oJWy86Mxwlq3nJshvT29t7kkEQ%3D7lqUKw7wyEzRC0G9Fc7c5xbKFzOrgAtOZBLycIiQMOWPduFJYe'
        );

        // Fetch request

        fetch('https://api.twitter.com/1.1/search/tweets.json?q=cars', {
            headers: headers,
            method: 'GET'
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log('data: ', data);
            });*/
        setTimeout(() => {
            // emulate data coming back from api
            const data = 'Twitter API Goes Here';

            this.setState({
                tweet: data
            });
        }, 2000);
    };

    modalCloseHandler = () => {
        this.setState({ searching: false });
    };

    render() {
        return (
            <React.Fragment>
                <div
                    style={{ marginTop: '75px', width: '100%', height: '100%' }}
                >
                    <Grid className='landing-grid'>
                        <Cell col={12}>
                            <img
                                src='./images/twitter-logo-new.png'
                                alt='home'
                                className='home-img'
                            />
                            {this.state.searching && <Backdrop />}
                            {this.state.searching && (
                                <Modal
                                    title='Here are your Tweets!'
                                    toPrev
                                    toNext
                                    canClose
                                    tweet={this.state.tweet}
                                    onClose={this.modalCloseHandler}
                                >
                                    <p>Modal Content</p>
                                </Modal>
                            )}

                            <div className='search-box'>
                                <input
                                    className='search-txt'
                                    type='text'
                                    placeholder='Enter keyword or Twitter handle here'
                                    value={this.state.input}
                                />
                                <a
                                    className='search-btn'
                                    onClick={this.startSearchingHandler}
                                >
                                    <i class='fas fa-search' />
                                </a>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default TweetFinder;
