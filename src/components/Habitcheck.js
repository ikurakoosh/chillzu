//the logging question (have you completed x today)
import React, {useContext, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom'; 
import {store} from '../store.js';
//import './App.css';

function Habitcheck(props) {
  let history = useHistory();
  const MyStore = useContext(store);
  const [goals, setGoals] = useState([...MyStore.state.habits])
  const {dispatch} = MyStore
  const {id} = useParams()
  console.log(id)
  const myGoal = goals.filter((goal)=> {
    return goal.id === id
  })

  function selectedYes (){
    dispatch({type: 'completed', habitID: id});
    history.push("/homescreen")
  }
  function selectedNo (){
    dispatch({type: 'reset', habitID: id});
    history.push("/homescreen")
  }
  return (
    <div className="Habitcheck">
        have you completed your {myGoal[0].name} today?

        <button type="button" onClick={selectedYes}> yes</button>
        <button type="button" onClick={selectedNo}>no</button>
<p></p>
        your {myGoal[0].name} goal includes: 
        <p></p>
        {myGoal[0].description}
        
    </div>
  );
}

export default Habitcheck;
