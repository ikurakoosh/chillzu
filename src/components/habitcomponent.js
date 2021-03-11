//habit circles on homescreen
import React from 'react';
import {
  useHistory,
} from 'react-router-dom'
//import './App.css';


function HabitComponent(props) {
  let history = useHistory();
  var activeClass ='';
/*if (props.done=== true) {
  activeClass= "HabitComponentDone"
} else {
  activeClass= ""
}
*/

function gotoHabitcheck() {

  history.push("/homescreen/Habitcheck/" + props.habitID)
}
  return (
    <div className={'HabitComponent' + ' ' + activeClass} onClick={gotoHabitcheck}>
     <p className= "constantLog">log</p>
     <p className= "habitVariable">{props.habit}</p>
     <p className = "habitDone">{props.done}</p>
    </div>

  );
}

export default HabitComponent;