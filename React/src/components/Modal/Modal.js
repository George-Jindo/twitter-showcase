import React from 'react';

import './Modal.css';


const modal = props => (
    <div className="modal">
        <header className='modal_header'>
            <h1>{props.title}</h1>
        </header>
        <div id="tweet_container">

            <div className="Tweet_1">
                <div className="name_top">{props.tweets.length > 0 ? props.tweets[0].user.name : ''}</div>
                <div className="screen_name_top">{props.tweets.length > 0 ? '@' + props.tweets[0].user.screen_name : ''}</div>
                <div className="divider_top"></div>
                <div className="text_top">{props.tweets.length > 0 ? props.tweets[0].text : ''}</div>
                <div className="Tweet_img_1"><img src={props.tweets.length > 0 ? props.tweets[0].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

            <div className="Tweet_2">
                <div className="name_top">{props.tweets.length > 1 ? props.tweets[1].user.name : ''}</div>
                <div className="screen_name_top">{props.tweets.length > 1 ? '@' + props.tweets[1].user.screen_name : ''}</div>
                <div className="divider_top"></div>
                <div className="text_top">{props.tweets.length > 1 ? props.tweets[1].text : ''}</div>
                <div className="Tweet_img_2"><img src={props.tweets.length > 1 ? props.tweets[1].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

            <div className="Tweet_3">
                <div className="name_top">{props.tweets.length > 2 ? props.tweets[2].user.name : ''}</div>
                <div className="screen_name_top">{props.tweets.length > 2 ? '@' + props.tweets[2].user.screen_name : ''}</div>
                <div className="divider_top"></div>
                <div className="text_top">{props.tweets.length > 2 ? props.tweets[2].text : ''}</div>
                <div className="Tweet_img_3"><img src={props.tweets.length > 2 ? props.tweets[2].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

            <div className="Tweet_4">
                <div className="name_bottom">{props.tweets.length > 3 ? props.tweets[3].user.name : ''}</div>
                <div className="screen_name_bottom">{props.tweets.length > 3 ? '@' + props.tweets[3].user.screen_name : ''}</div>
                <div className="divider_bottom"></div>
                <div className="text_bottom">{props.tweets.length > 3 ? props.tweets[3].text : ''}</div>
                <div className="Tweet_img_4"><img src={props.tweets.length > 3 ? props.tweets[3].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

            <div className="Tweet_5">
                <div className="name_bottom">{props.tweets.length > 4 ? props.tweets[4].user.name : ''}</div>
                <div className="screen_name_bottom">{props.tweets.length > 4 ? '@' + props.tweets[4].user.screen_name : ''}</div>
                <div className="divider_bottom"></div>
                <div className="text_bottom">{props.tweets.length > 4 ? props.tweets[4].text : ''}</div>
                <div className="Tweet_img_5"><img src={props.tweets.length > 4 ? props.tweets[4].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

            <div className="Tweet_6">
                <div className="name_bottom">{props.tweets.length > 5 ? props.tweets[5].user.name : ''}</div>
                <div className="screen_name_bottom">{props.tweets.length > 5 ? '@' + props.tweets[5].user.screen_name : ''}</div>
                <div className="divider_bottom"></div>
                <div className="text_bottom">{props.tweets.length > 5 ? props.tweets[5].text : ''}</div>
                <div className="Tweet_img_6"><img src={props.tweets.length > 5 ? props.tweets[5].user.profile_image_url_https : ''} alt="Profile Image"></img></div>
            </div>

        </div>
        <section className="modal_actions">
            {props.canClose && <button className="btn-modal" onClick={props.onClose}>Close</button>}
        </section>
    </div>
);

export default modal;