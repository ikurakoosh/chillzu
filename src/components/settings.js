//settings page to manage account, view and goals
import React from 'react';
import Navigation from './navigation';
import {
  Link,
} from 'react-router-dom'
//import './App.css';

function Settings() {
  return (
    <div className="Settings">
       <Link to= "/settings/managegoals" className= "SettingsLink">Manage Goals</Link>
        <Navigation></Navigation>
    </div>
  );
}

export default Settings;