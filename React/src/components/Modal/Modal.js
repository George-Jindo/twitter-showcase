import React from 'react';

import './Modal.css';


const modal = props => (
    <div className="modal">
        <header className='modal_header'>
            <h1>{props.title}</h1>
        </header>
        <section className="modal_content">
            <div id="tweet_column">
                <div className="tweet">
                    <div className="tweet_image">
                        <img src={props.tweets.length > 0 ? props.tweets[0].user.profile_image_url_https : ''} alt="Profile Image"></img>
                    </div>
                    <div className="tweet_screen_name">
                        <p>{props.tweets.length > 0 ? props.tweets[0].user.screen_name : ''}</p>
                    </div>
                    <div className="tweet_name">
                        <p>{props.tweets.length > 0 ? props.tweets[0].user.name : ''}</p>
                    </div>
                    <hr></hr>
                    <div className="tweet_text">
                        <p>{props.tweets.length > 0 ? props.tweets[0].text : ''}</p>
                    </div>
                    <hr></hr>
                    <div className="tweet_date">
                        <p>{props.tweets.length > 0 ? props.tweets[0].created_at : ''}</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </section>
        <section className="modal_actions">
            {props.canClose && <button className="btn-modal" onClick={props.onClose}>Close</button>}
        </section>
    </div>
);

export default modal;