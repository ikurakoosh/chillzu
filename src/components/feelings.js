//feelings selection
import React,{useState} from 'react';
//import './App.css';
import FeelingComponent from'./feelingcomponent';
import {
  Link,
} from 'react-router-dom'

function Feelings() {
  function selectFeeling(feeling) {
    setActiveFeeling(feeling);
  }
  const [activeFeeling, setActiveFeeling] = useState("");
  return (
    <div className="Feelings">
       
        <h2>
        Let's log how you've been been feeling today...
        </h2>
        <p>
        Please select the emotion that applied best to your whole day. 
        </p>
        <FeelingComponent feeling="happy" color="bggreen" selected= {activeFeeling === "happy" ? true : false} onClick={selectFeeling.bind(this,"happy")}></FeelingComponent>
        <FeelingComponent feeling="excited" color="bggreen" selected= {activeFeeling === "excited" ? true : false} onClick={selectFeeling.bind(this,"excited")}></FeelingComponent>
        <FeelingComponent feeling="confident" color="bggreen" selected= {activeFeeling === "confident" ? true : false} onClick={selectFeeling.bind(this,"confident")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="proud" color="bggreen"selected= {activeFeeling === "proud" ? true : false} onClick={selectFeeling.bind(this,"proud")}></FeelingComponent>
        <FeelingComponent feeling="loving" color="bggreen"selected= {activeFeeling === "loving" ? true : false} onClick={selectFeeling.bind(this,"loving")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="calm" color="bgorange"selected= {activeFeeling === "calm" ? true : false} onClick={selectFeeling.bind(this,"calm")}></FeelingComponent>
        <FeelingComponent feeling="optimistic" color="bgorange"selected= {activeFeeling === "optimistic" ? true : false} onClick={selectFeeling.bind(this,"optimistic")}></FeelingComponent>
        <FeelingComponent feeling="joyful" color="bgorange"selected= {activeFeeling === "joyful" ? true : false} onClick={selectFeeling.bind(this,"joyful")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="okay" color="bggrey"selected= {activeFeeling === "okay" ? true : false} onClick={selectFeeling.bind(this,"okay")}></FeelingComponent>
        <FeelingComponent feeling="tired" color="bggrey"selected= {activeFeeling === "tired" ? true : false} onClick={selectFeeling.bind(this,"tired")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="bored" color="bggrey"selected= {activeFeeling === "bored" ? true : false} onClick={selectFeeling.bind(this,"bored")}></FeelingComponent>
        <FeelingComponent feeling="numb" color="bggrey"selected= {activeFeeling === "numb" ? true : false} onClick={selectFeeling.bind(this,"numb")}></FeelingComponent>
        <FeelingComponent feeling="sleepy" color="bggrey"selected= {activeFeeling === "sleepy" ? true : false} onClick={selectFeeling.bind(this,"sleepy")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="frustrated" color="bgmagenta"selected= {activeFeeling === "frustrated" ? true : false} onClick={selectFeeling.bind(this,"frustrated")}></FeelingComponent>
        <FeelingComponent feeling="angry" color="bgmagenta"selected= {activeFeeling === "angry" ? true : false} onClick={selectFeeling.bind(this,"angry")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="stressed" color="bgmagenta"selected= {activeFeeling === "stressed" ? true : false} onClick={selectFeeling.bind(this,"stressed")}></FeelingComponent>
        <FeelingComponent feeling="overwhelmed" color="bgmagenta"selected= {activeFeeling === "overwhelmed" ? true : false} onClick={selectFeeling.bind(this,"overwhelmed")}></FeelingComponent>
        <FeelingComponent feeling="annoyed" color="bgmagenta"selected= {activeFeeling === "annoyed" ? true : false} onClick={selectFeeling.bind(this,"annoyed")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="anxious" color="bgpurple"selected= {activeFeeling === "anxious" ? true : false} onClick={selectFeeling.bind(this,"anxious")}></FeelingComponent>
        <FeelingComponent feeling="insecure" color="bgpurple"selected= {activeFeeling === "insecure" ? true : false} onClick={selectFeeling.bind(this,"insecure")}></FeelingComponent>
        <FeelingComponent feeling="afraid" color="bgpurple"selected= {activeFeeling === "afraid" ? true : false} onClick={selectFeeling.bind(this,"afraid")}></FeelingComponent>
        <br></br>
        <FeelingComponent feeling="sad" color="bgblue"selected= {activeFeeling === "sad" ? true : false} onClick={selectFeeling.bind(this,"sad")}></FeelingComponent>
        <FeelingComponent feeling="guilty" color="bgblue"selected= {activeFeeling === "guilty" ? true : false} onClick={selectFeeling.bind(this,"guilty")}></FeelingComponent>
        <FeelingComponent feeling="ashamed" color="bgblue"selected= {activeFeeling === "ashamed" ? true : false} onClick={selectFeeling.bind(this,"ashamed")}></FeelingComponent>
        <br></br>
       <Link to= "/Homescreen"><div className= "buttonDone">Done</div></Link>
        
    </div>
  );
}

export default Feelings;
