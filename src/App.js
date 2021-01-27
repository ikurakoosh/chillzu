import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';
import Calendar from './components/calendar';
import Feelings from './components/feelings';
import FollowUp from './components/follow-up';
import Homescreen from './components/homescreen';
import Settings from './components/settings';
import manageGoals from './components/settings/managegoals';
import Habitcheck from './components/Habitcheck';

function App() {
  return (
    <div className= "Container">
      <center>
    <BrowserRouter>
    <h1>
    chillzu
    </h1>
    <Switch>
     <Route exact path="/Calendar" component={Calendar}></Route>
     <Route exact path="/Feelings" component={Feelings}></Route>
     <Route exact path="/FollowUp" component={FollowUp}></Route>
     <Route exact path="/Homescreen" component={Homescreen}></Route>
     <Route exact path="/Settings" component={Settings}></Route>
     <Route exact path="/settings/managegoals" component={manageGoals}></Route>
     <Route exact path="/homescreen/habitcheck" component={Habitcheck}></Route>
     <Route exact path="*" component={Homescreen}></Route>
    </Switch>
 </BrowserRouter>
 </center>
 </div>
  );
}

export default App;
