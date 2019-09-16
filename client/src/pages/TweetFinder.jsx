import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Cell } from 'react-mdl';
import './TweetFinder.css';

import Backdrop from '../components/Backdrop/Backdrop';
import Modal from '../components/Modal/Modal';

class TweetFinder extends Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            tweets: [],
            searching: false
        };
    }

    //Creates the Keyword value to user input
    updateKeyword(event) {
        this.setState({ keyword: event.target.value });
    }

    startSearchingHandler = () => {
        this.setState({ searching: true });

        axios
            .get(`/api/tweets?q=${this.state.keyword}`)
            .then(response => {
                //console.log('data: ', response.data);
                this.setState({ tweets: response.data });
            })
            .catch(error => {
                console.log('Error Message: ' + error);
            });
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
                                    canClose
                                    tweets={this.state.tweets}
                                    onClose={this.modalCloseHandler}
                                >
                                    <p>Modal Content</p>
                                </Modal>
                            )}

                            <div className='search-box'>
                                <input
                                    className='search-txt'
                                    type='text'
                                    name='keyword'
                                    placeholder='Enter Keyword Here'
                                    onChange={this.updateKeyword.bind(this)}
                                />
                                <a
                                    className='search-btn'
                                    onClick={this.startSearchingHandler}
                                >
                                    <i className='fas fa-search' />
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
