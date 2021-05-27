import React from 'react';
import PomodoroSession from './components/PomodoroSession.js';
import PomodoroBreak from './components/PomodoroBreak.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	sessionTime: 25,
    	breakTime: 5
    }
  }
  render(){
  	const {sessionTime, breakTime} = this.state;
  	return (
    <div className="App">
      <PomodoroSession  sessionTime = {sessionTime}/>
      <PomodoroBreak breakTime = {breakTime}/>
    </div>
   );
  }	
}

export default App;
