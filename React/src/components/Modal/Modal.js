import React from 'react';

import './Modal.css';


const modal = props => (
    <div className="modal">
        <header className='modal_header'>
            <h1>{props.title}</h1>
        </header>
        <section className="modal_content">
            {props.tweet}
            <div className='twit_user'></div>
            <div className='twit_message'></div>
        </section>
        <section className="modal_actions">
            {props.onPrev && <button className="btn-modal" onClick={props.onPrev}>Previous</button>}
            {props.onNext && <button className="btn-modal" onClick={props.onNext}>Next</button>}
            {props.canClose && <button className="btn-modal" onClick={props.onClose}>Close</button>}
        </section>
    </div>
);

export default modal;