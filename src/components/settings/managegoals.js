import React, {useContext, useState} from 'react';
//import './App.css';
import {
    Link,
  } from 'react-router-dom'
  import {store} from '../../store.js';
function ManageGoals() {
  const MyStore = useContext(store);
  const [goals, setGoals] = useState([...MyStore.state.habits])
  const {dispatch} = MyStore
  
    function callOnChange(event) {
     const goalIndex = event.target.dataset.index
     const goalValue = event.target.value
     dispatch({type: 'updateHabit', HabitIndex: goalIndex, HabitValue: goalValue})
    }
  function callDelete(index) {
    alert(index)
    dispatch({type: 'deleteHabit', HabitIndex: index});
    setGoals([...MyStore.state.habits])
    
  }
  function callAddNew() {
    alert('Add new. ');
  }
  return (
    <div className="manageGoals">
        input ur goals
        {
          goals.map((goal, index) => (
            <div><input type="text" defaultValue= {goal.name} data-index = {index} onChange={callOnChange}/><button type="button" onClick={()=>callDelete(index)}> delete</button></div>
          ))
        }
        <button type="button" onClick={callAddNew}> add new</button>
        <div>
        <Link to= "/Settings">back</Link>
        </div>
    </div>
  );
}

export default ManageGoals;