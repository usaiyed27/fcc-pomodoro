import PomodoroSession from './components/PomodoroSession.js';
import PomodoroBreak from './components/PomodoroBreak.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <PomodoroSession />
      <PomodoroBreak />
    </div>
  );
}

export default App;
