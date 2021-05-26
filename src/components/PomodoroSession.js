import React from 'react';


const PomodoroSession = () => {
	return(
		<div id='session-label'>
		 <h1>Pomodoro Session</h1>
		 <p id = "session-length">25</p>
		 <button id = "session-decrement">Decrement Session</button>
		 <button id = "session-increment">Increment Session</button>
		 <p id = "timer-label">Session</p>
		 <p id = "time-left">Time Left</p>
		 <button id = "start_stop">Start/Stop Session</button>
		 <button id = "reset">Reset Timer</button>
		</div>
	)
}

export default PomodoroSession;