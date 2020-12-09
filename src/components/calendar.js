//calendar page that shows "streaks"
import React from 'react';
//import './App.css';
import Calendar from 'react-calendar';
import Navigation from './navigation';
function calendarComp() {
  var date = new Date();
  var currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  var nextMonth = new Date(date.getFullYear(), date.getMonth()+1, 1);
  return (
    <div className="Calendar">
        may june july
        <Calendar defaultView = "month" defaultValue= {currentMonth} showNavigation={false}>

        </Calendar>
        <Calendar defaultView = "month" defaultValue= {nextMonth} showNavigation={false}>

        </Calendar>

        <Navigation></Navigation>
    </div>
  );
}

export default calendarComp;
