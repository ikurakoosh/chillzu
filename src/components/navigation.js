//week on homescreen
import React from 'react';
import {
    Link,
  } from 'react-router-dom'
//import './App.css';

function Navigation() {
  return (
    <div className="Navigation">
       <Link to= "/Homescreen">Home</Link>
       <Link to= "/Settings">Settings</Link>
    </div>
  );
}

export default Navigation;