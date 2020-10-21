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
import question from './components/question';
import Settings from './components/settings';

function App() {
  return (
    <BrowserRouter>
    chillzu
    <Switch>
     <Route exact path="/Calendar" component={Calendar}></Route>
     <Route exact path="/Feelings" component={Feelings}></Route>
     <Route exact path="/FollowUp" component={FollowUp}></Route>
     <Route exact path="/Homescreen" component={Homescreen}></Route>
     <Route exact path="/question" component={question}></Route>
     <Route exact path="/Settings" component={Settings}></Route>
     <Route exact path="*" component={Homescreen}></Route>
    </Switch>
 </BrowserRouter>
  );
}

export default App;
