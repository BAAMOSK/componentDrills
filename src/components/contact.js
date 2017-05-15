import React from 'react';
import './contact.css';

//this is just a template for how the data will look
//all the data is external, coming from address-book.js
//You don't want the data here because I'll have to create a contact component for each
//This allows for re-usability of this template
export default function Contact(props) {
  return (
    //three divs img, name, address
    <div id={`c${props.index}`} className='contact'>

      <img className='contact-photo' src={props.photo} alt={`${props.name}${props.name.slice(-1) === 's' ? "'" : "'s"} avatar`} />

      <h2 className='contact-name'>
        {props.name}
      </h2>

      <div className="contact-address">
        {props.address}
      </div>

    </div>
  )
}