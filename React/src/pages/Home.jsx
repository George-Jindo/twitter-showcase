import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';

const HomePage = () => {
    return (
        <div style={{ marginTop: '75px', width: '100%', height: '100%' }}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img
                        src='./images/twitter-logo-new.png'
                        alt='home'
                        className='home-img'
                    />
                    <div className='banner-text'>
                        <h1>Welcome To The Twitter Showcase!</h1>

                        <hr />
                        <p>
                            Find Tweets from Twitter using keywords and/or
                            Twitter handles
                        </p>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
};

export default HomePage;
