import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { NewTaskContext, Context } from './Context/NewTaskContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Context.Provider value={NewTaskContext}>
				<App />
			</Context.Provider>
		</Router>
	</React.StrictMode>
);
