import React from 'react'    ;
import ReactDOM from 'react-dom';
import NavigationBar from '../src/components/navigation-bar';
import AddressBook from '../src/components/address-book'
import './index.css';

//this links data is being fun in monkey function
// const links = [{
//   text: 'Courses',
//   href: 'http://www.thinkful.com/courses/'
// }, {
//   text: 'Mentorship',
//   href: 'http://www.thinkful.com/mentorship'
// },
//   {
//     text: 'React-Mentor',
//     href: 'https://www.thinkful.com/mentors/joe-turner/'
//   }
// ];
//render function is pulling everything from the navigation-bar.js file
ReactDOM.render(
  // <NavigationBar title='Thinkful Tee' links={links} />,
  <AddressBook />,
  document.getElementById('root')
)

