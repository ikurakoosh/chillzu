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
    dispatch({type: 'deleteHabit', HabitIndex: index});
    setGoals([...MyStore.state.habits])
    
  }
  function callAddNew() {
    if (goals.length < 6) {
      dispatch({type: 'addHabit'});
      setGoals([...MyStore.state.habits])
    }
    else {
      alert("You've reached your goal limit. ")
    }
  }
  return (
    <div className="manageGoals">
        input ur goals
        {
          goals.map((goal, index) => (
            <div>
              <input type="text" defaultValue= {goal.name} data-index = {index} onChange={callOnChange} maxLength = "10" />
              <button type="button" onClick={()=>callDelete(index)}> delete</button>
              </div>
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