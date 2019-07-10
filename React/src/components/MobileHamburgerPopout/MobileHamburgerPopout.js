import React from 'react';
import { Link } from "react-router-dom";

import './MobileHamburgerPopout.css';

const mobileHamburgerPopout = props => {
    let hamburgerClasses = 'popout';
    if (props.show) {
        hamburgerClasses = 'popout open';
    }
    return (
    <nav className={hamburgerClasses}>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/TweetFinder"}>Tweet Finder</Link></li>
            <li><Link to={"/RandomTweet"}>Random Tweet</Link></li>             
        </ul>
    </nav>
    );
};

export default mobileHamburgerPopout;