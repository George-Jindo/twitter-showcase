import React from 'react';
import { Link } from "react-router-dom";

import MobileHamburgerButton from '../MobileHamburgerPopout/MobileHamburgerButton';
import './Navbar.css';
import Logo from './ts-png-8.png';


const navbar = props => (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="popout_toggle"> 
                <MobileHamburgerButton click={props.hamburgerButton} />
            </div>
            <div className="navbar_logo"><img src={Logo} alt='website logo' /></div>
            <div className="logo_nav_item_space" />
            <div className='navbar_items'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/TweetFinder"}>Tweet Finder</Link></li>
                    <li><Link to={"/RandomTweet"}>Random Tweet</Link></li>             
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;