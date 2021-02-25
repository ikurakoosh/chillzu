import React, {useContext} from 'react';
//import './App.css';
import {
    Link,
  } from 'react-router-dom'
  import {store} from '../../store.js';
function ManageGoals() {
  const MyVariables = useContext(store);
  const {dispatch} = MyVariables
    let goals = MyVariables.state.habits.map((goal, index) =>
      <div key = {index}>
        <input type="text" defaultValue= {goal.name} data-index = {index} onChange={callOnChange}/><button type="button" onClick={callDelete}> delete</button>
      </div>
    );
    function callOnChange(event) {
     alert(event.target.dataset.index)
     const goalIndex = event.target.dataset.index
     const goalValue = event.target.value
     dispatch({type: 'updateHabit', HabitIndex: goalIndex, HabitValue: goalValue})
    }
  function callDelete(event) {
    console.log("holii ")
    const goalIndex = event.target.dataset.index
    dispatch({type: 'deleteHabit', HabitIndex: goalIndex});
    goals = <div>hola</div>
    
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

export default ManageGoals;