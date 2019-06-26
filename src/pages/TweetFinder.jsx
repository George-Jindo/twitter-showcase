import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './TweetFinder.css';

import Backdrop from '../components/Backdrop/Backdrop';
import Modal from '../components/Modal/Modal';

class TweetFinder extends Component {
    state = {
        searching: false
    };

    startSearchingHandler = () => {
        this.setState({ searching: true });
    };

    modalPrevHandler = () => {
        this.setState({ searching: false });
    };

    modalNextHandler = () => {
        this.setState({ searching: false });
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
                                    onPrev={this.modalPrevHandler}
                                    onNext={this.modalNextHandler}
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
