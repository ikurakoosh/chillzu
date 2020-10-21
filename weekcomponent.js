//week on homescreen
import React from 'react';
//import './App.css';
import DayComponent from './daycomponent';

function WeekComponent() {
  return (
    <div className="WeekComponent">
       mon tues wed thurs fri sat
       <DayComponent day ="16"></DayComponent>
       <DayComponent day ="17"></DayComponent>
    </div>
  );
}

export default WeekComponent;