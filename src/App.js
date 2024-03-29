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
import ManageGoals from './components/settings/Managegoals';
import Habitcheck from './components/Habitcheck';
import NotFound from './components/NotFound';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    //let  user = {username:"Ikurakoosh", name:"Bella"}
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
       <Route exact path="/settings/managegoals" component={ManageGoals}></Route>
       <Route exact path="/homescreen/habitcheck/:id" component={Habitcheck}></Route>
       <Route exact path="/" component={Homescreen}></Route>
       <Route exact path="*" component={NotFound}></Route>
      </Switch>
   </BrowserRouter>
   </center>
   </div>
    );
  }
}
export default App;
