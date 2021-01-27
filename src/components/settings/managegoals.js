import React from 'react';
//import './App.css';
import {
    Link,
  } from 'react-router-dom'
function manageGoals(props) {

    let localGoals = props.savedGoals
    const goals = localGoals.map((goal) =>
      <div>
        <input type="text" defaultValue= {goal.name} onChange={callOnChange}/><button type="button" onClick={callDelete}> delete</button>
      </div>
    );
    function callOnChange() {
     alert("cambiaste")
    }
  function callDelete() {
    alert('delete this');
  }
  function callAddNew() {
    alert('Add new. ');
  }
  return (

    <div className="manageGoals">
        input ur goals
        {goals}
        <button type="button" onClick={callAddNew}> add new</button>
        <div>
        <Link to= "/Settings">back</Link>
        </div>
    </div>
  );
}

export default manageGoals;