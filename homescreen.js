//home page which includes all the main buttons
import React from 'react';
import {
  Link,
} from 'react-router-dom'
//import './App.css';
//import Calendar from './calendar';
import WeekComponent from './weekcomponent';
import HabitComponent from './habitcomponent';
import Navigation from './navigation';
function Homescreen() {
  return (
    <div className="Homescreen">
        log today
        <Link to="/Calendar">Calendar</Link>
        <WeekComponent></WeekComponent>
        <HabitComponent habit="skincare"></HabitComponent>
        <HabitComponent habit="hydration"></HabitComponent>
        <Link to="/Feelings">How are you feeling today?</Link>
        <Navigation></Navigation>
    </div>
  );
}

export default Homescreen;

