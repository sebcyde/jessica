import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { NewTaskContext } from './Context/NewTaskContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<NewTaskContext.Provider
				value={{
					event: null,
					location: null,
					allday: null,
					start: null,
					ends: null,
					important: null,
					notes: null,
				}}
			>
				<App />
			</NewTaskContext.Provider>
		</Router>
	</React.StrictMode>
);
