//weekdays on homescreen
import React from 'react';
//import './App.css';

function DayComponent(props) {
  return (
    <div className="DayComponent">
       {props.day}
    </div>
  );
}

export default DayComponent;