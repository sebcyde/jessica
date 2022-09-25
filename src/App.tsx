import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme/Base.scss';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './Pages/LoadingPage';
import NewTask from './Pages/NewTask';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Settings from './Pages/Settings';
import Calendar from './Pages/Calendar';
import Navbar from './Partials/Navbar';
import ToDo from './Pages/ToDo';
import Notes from './Pages/Notes';

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
						<Route path="/settings" element={<Settings />} />
						<Route path="/calendar" element={<Calendar />} />
						<Route path="/todos" element={<ToDo />} />
						<Route path="/notes" element={<Notes />} />
						<Route path="/calendar" element={<Calendar />} />
					</Routes>
					<Navbar />
				</>
			)}
		</div>
	);
}

export default App;
