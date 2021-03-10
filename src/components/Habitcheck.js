//the logging question (have you completed x today)
import React from 'react';
//import './App.css';

function Habitcheck(props) {
  return (
    <div className="Habitcheck">
        have you completed {props.habitID} today?

        <button type="button"> yes</button><button type="button">no</button>
    </div>
  );
}

export default Habitcheck;
