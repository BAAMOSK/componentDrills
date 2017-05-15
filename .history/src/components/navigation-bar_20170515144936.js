import React from 'react';
import './navigation-bar.css';

//This is state-less the data is being pulled from index.js
//has to be passed from the outside because of dynamic use
export default function NavigationBar(props) {
  //links is being declared here.
  const monkey = props.links.map((link, index) => (
    //links is used when we render in <ul>
    //index = 0
    //href is link
    //text is name OF link
    <li key={index}>
      <a href={link.href}>
        {link.text}
      </a>
    </li>
  ));

  return (
    //div is navbar
    //props.title will be defined from index.js
    //{links} is the function
    <div className="navigation-bar">
      <h1>{props.title}</h1>
      <nav className="navigation-bar-nav">
        <ul>
          {monkey}
        </ul>
      </nav>
    </div>
  );
}
