import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Theme/Base.scss';
import { Routes, Route } from 'react-router-dom';
import { LoadingPage } from './Pages/LoadingPage';
import { Button } from 'react-bootstrap';

function App() {
	const [Loading, setLoading] = useState<boolean>(true);
	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Button>Push Me</Button>
					<Routes>{/* <Route path="/" element={<Homepage />} /> */}</Routes>
				</>
			)}
		</div>
	);
}

export default App;
