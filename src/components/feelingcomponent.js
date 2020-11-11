
import React from 'react';
//import './App.css';



function FeelingComponent(props) {
  var activeClass ='';
if (props.selected=== true) {
  activeClass= "feelingSelected"
} else {
  activeClass= ""
}
  return (
    <div className={'FeelingComponent' + ' '+ props.color + ' '+ activeClass} onClick={props.onClick} > 
      {props.feeling} 
    </div>
  
  );
}

export default FeelingComponent;