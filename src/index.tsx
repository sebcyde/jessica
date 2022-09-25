import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {
	NewTaskContext,
	InitNewTask,
	CalendarContext,
	InitCalendar,
} from './Context/NewTaskContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<NewTaskContext.Provider value={InitNewTask}>
				<CalendarContext.Provider value={InitCalendar}>
					<App />
				</CalendarContext.Provider>
			</NewTaskContext.Provider>
		</Router>
	</React.StrictMode>
);
