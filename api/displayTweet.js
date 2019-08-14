const displayData = data => {
    return data.map(tweets => {
        const { id, created_at, text, retweet_count, favorite_count } = tweets;
        const { name, screen_name, profile_image_url_https } = tweet.user;

        return {
            id,
            created_at,
            name,
            screen_name,
            profile_image_url_https,
            text,
            retweet_count,
            favorite_count
        };
    });
};