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
import ManageGoals from './components/settings/managegoals';
import Habitcheck from './components/Habitcheck';
import NotFound from './components/NotFound';

function App() {
   let  savedGoals = [{id:"1", name:"Reading", done: true},
   {id:"2", name:"goal 2", done: true},
   {id:"3", name:"goal 3", done: true},
   {id:"4", name:"goal 4", done: true}]
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
     <Route exact path="/Homescreen" render={(props) => (
            <Homescreen {...props} savedGoals={savedGoals} />
        )}>
     </Route>
     <Route exact path="/Settings" component={Settings}></Route>
     <Route exact path="/settings/managegoals" render={(props) => (
            <ManageGoals {...props} savedGoals={savedGoals} />
        )}>
    </Route>
     <Route exact path="/homescreen/habitcheck" component={Habitcheck}></Route>
     <Route exact path="/" render={(props) => (
            <Homescreen {...props} savedGoals={savedGoals} />
        )}>
     </Route>
     <Route exact path="*" component={NotFound}></Route>
    </Switch>
 </BrowserRouter>
 </center>
 </div>
  );
}

export default App;
