import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme/Base.scss';
import { Routes, Route } from 'react-router-dom';
import LoadingPage from './Pages/LoadingPage';
import NewTask from './Pages/NewTask';
import { Button } from 'react-bootstrap';

function App() {
	const [Loading, setLoading] = useState<boolean>(false);
	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						{/* <Route path="/" element={<Homepage />} /> */}
						<Route path="/newtask" element={<NewTask />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
