import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardWelcome from '../Components/DashboardWelcome';
import { NewTaskContext } from '../Context/NewTaskContext';
import DashboardNavbar from '../Partials/DashboardNavbar';

type Props = {};

const Dashboard = (props: Props) => {
	const navigate = useNavigate();
	const addEvent = (): void => {
		navigate('/newtask');
	};

	console.log(NewTaskContext);

	return (
		<div className="Page flex flex-col align-cent">
			<DashboardNavbar />
			<DashboardWelcome />
			<Button
				onClick={addEvent}
				className="width-95 margin-left-a margin-right-a"
			>
				+ New Event
			</Button>
		</div>
	);
};

export default Dashboard;
