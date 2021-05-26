import React from 'react';
import PomodoroSession from './components/PomodoroSession.js';
import PomodoroBreak from './components/PomodoroBreak.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
  	return (
    <div className="App">
      <PomodoroSession />
      <PomodoroBreak />
    </div>
   );
  }	
}

export default App;
