import React from 'react';
import './address-book.css';
import Contact from './contact';

//gets the data, actually is the data
//this exports the data and what to render
export default class AddressBook extends React.Component {
  constructor(props) {
    super(props);
    //this is the state
    //this is stateful because data is here
    //All this data will be passed to contact.js file
    this.state = {
      funnyPictures: [{
        name: 'Alice Aardvark',
        photo: 'https://api.adorable.io/avatars/64/alice%40thinkful.com',
        address: '1600 Pensylvania Ave'
      }, {
        name: 'Bob Bear',
        photo: 'https://api.adorable.io/avatars/64/bob%40thinkful.com',
        address: '725 5th Ave'
      }, {
        name: 'Carol Coyote',
        photo: 'https://api.adorable.io/avatars/64/carol%40thinkful.com',
        address: '4 Pennsylvania Plaza'
      }]
    };
  }
  //renders the data
  render() {
    //contacts is going over the funnyPictures array
    //What is CONTACT line 34? this is the class="contact"
    //each of these will be the value of contacts line 39
    const contacts = this.state.funnyPictures.map((contact, index) =>
      <Contact key={index} index={index} {...contact} />
    );
    return (
      <div className="address-book">
        {contacts}
      </div>
    );
  };
}