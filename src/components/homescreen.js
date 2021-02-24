//home page which includes all the main buttons
import React, {useContext} from 'react';
import {
  Link,
} from 'react-router-dom'
//import './App.css';
//import Calendar from './calendar';
import WeekComponent from './weekcomponent';
import HabitComponent from './habitcomponent';
import Navigation from './navigation';
import Habitcheck from './Habitcheck';
import {store} from '../store.js';
//var habits= ["skincare","hydration","diet","exercise","sleep","social"]

var showHabitCheck = false
//var savedHabit = [{id:"1", name:"x", done: true},{id:"2", name:"xx", done: false},{id:"3", name:"xxx", done: true},{id:"4", name:"xxxx", done: false},{id:"5", name:"xxxxx", done: true}]


function Homescreen() { 
  const MyVariables = useContext(store);
  const habits = MyVariables.state.habits.map((habit) =>
<HabitComponent habit={habit.name} done={habit.done}
  key = {habit.id}></HabitComponent>
 );
 
  function showHabitCheckComponent(show) {

  if (show=== true){
    return <Habitcheck></Habitcheck> 
  } else {
    return <div></div>
  }
  }
  return (
  <div className="Homescreen">
        log today
        <Link to="/Calendar">Calendar</Link>
        <WeekComponent></WeekComponent> 
      <div className="HabitComponentAlign">
      {habits}
      </div>
    
        <Link to="/Feelings">How are you feeling today?</Link>
        <Navigation></Navigation>

        {showHabitCheckComponent(showHabitCheck)}
    </div>
  );
}

export default Homescreen;

