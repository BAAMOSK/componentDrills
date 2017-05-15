import React from 'react';
import './contact.css';

export default function Contact(props) {
  return (
    <div id={`c${props.index}`} className='contact'>
      <img className='contact-photo' src={props.photo} `} />
      <h2 className='contact-name'>
      {props.name}
      </h2>
      <div className="contact-address">
      {props.address}
      </div>
      </div>
  );
}