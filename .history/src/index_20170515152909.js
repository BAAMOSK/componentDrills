import React from 'react'    ;
import ReactDOM from 'react-dom';
import NavigationBar from '../src/components/navigation-bar';
import './index.css';

//this links data is being fun in monkey function
const links = [{
  text: 'Courses',
  href: 'http://www.thinkful.com/courses/'
}, {
  text: 'Mentorship',
  href: 'http://www.thinkful.com/mentorship'
}];
//render function is pulling everything from the navigation-bar.js file
ReactDOM.render(
  <NavigationBar title='Thinkful Tee's links={links} />,
  document.getElementById('root')
)

