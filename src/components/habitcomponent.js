//habit circles on homescreen
import React from 'react';
//import './App.css';


function HabitComponent(props) {
  var activeClass ='';
if (props.done=== true) {
  activeClass= "HabitComponentDone"
} else {
  activeClass= ""
}
  return (
    <div className={'HabitComponent' + ' ' + activeClass} onClick={props.onClick}>
     <p className= "constantLog">log</p>
     <p className= "habitVariable">{props.habit}</p>
     <p className = "habitDone">{props.done}</p>
    </div>

  );
}

export default HabitComponent;