import React from 'react';

import './MobileHamburgerButton.css';

const mobileHamburgerButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle_button_line"/>
        <div className="toggle_button_line"/>
        <div className="toggle_button_line"/>
    </button>
);

export default mobileHamburgerButton;