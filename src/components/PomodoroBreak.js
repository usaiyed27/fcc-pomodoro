import React from 'react';

const PomodoroBreak = () => {
	return(
		<div id = 'break-label'>
		<h3>Break Length</h3>
		<p id = "break-length">5</p>
		<button id = "break-decrement">Decrement Break</button>
		<button id = "break-increment">Increment Break</button>
		</div>
	)
}

export default PomodoroBreak;