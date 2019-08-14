import React from "react";

const Tweets = ({ tweet }) => {
    if (!Object.keys(tweet).length) {
        return null;
    }

    const {
        created_at,
        name,
        screen_name,
        profile_image_url_https,
        text,
        retweet_count,
        favorite_count
    } = tweet;

    return (
        <div>Something Goes Here.</div>
    );


};

export default Tweets;