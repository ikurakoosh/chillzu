//calendar page that shows "streaks"
import React from 'react';
import '../App.css';
import Calendar from 'react-calendar';
import Navigation from './navigation';

function calendarComp() {
  var date = new Date();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  var pastMonth = new Date(date.getFullYear(), date.getMonth()-1, 1);
  return (
    <div className="Calendar">
        {months[date.getMonth()]}
        <p></p>
        <Calendar defaultView = "month" defaultValue= {currentMonth} showNavigation={false}>

        </Calendar>
        <p></p>
        {months[date.getMonth()-1]}
       <p></p>
        <Calendar defaultView = "month" defaultValue= {pastMonth} showNavigation={false}>

        </Calendar>
        <p></p>
        <Navigation></Navigation>
    </div>
  );
}

export default calendarComp;
