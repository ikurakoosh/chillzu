import React from 'react';
//import './App.css';
import {
    Link,
  } from 'react-router-dom'
function manageGoals() {
    var savedGoal = [{id:"1", name:"goal 1"},{id:"2", name:"goal 2"},{id:"3", name:"goal 3"},{id:"4", name:"goal 4"}]
    const goals = savedGoal.map((goal) =>
      <div>
        <input type="Text" value= {goal.name} ></input> <button type="button"> delete</button>
      </div>
    );

  return (
    <div className="manageGoals">
        input ur goals
        {goals}
        <button type="button"> add new</button>
        <div>
        <Link to= "/Settings">back</Link>
        </div>
    </div>
  );
}

export default manageGoals;