import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme/Base.scss';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './Pages/LoadingPage';
import NewTask from './Pages/NewTask';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import About from './Pages/About';

function App() {
	const [Loading, setLoading] = useState<boolean>(false);
	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/newtask" element={<NewTask />} />
						<Route path="/about" element={<About />} />
						<Route path="/profile" element={<Profile />} />
						{/* <Route path="/newtask" element={<NewTask />} />
						<Route path="/newtask" element={<NewTask />} /> */}
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
