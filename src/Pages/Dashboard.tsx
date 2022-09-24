import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardWelcome from '../Partials/DashboardWelcome';
import { NewTaskContext } from '../Context/NewTaskContext';
import DashboardNavbar from '../Partials/DashboardNavbar';
import CalendarComponent from '../Partials/CalendarComponent';

type Props = {};

const Dashboard = (props: Props) => {
	const navigate = useNavigate();
	const addEvent = (): void => {
		navigate('/newtask');
	};

	console.log(NewTaskContext);

	return (
		<div className="Page flex flex-col align-cent ">
			<DashboardNavbar />
			<CalendarComponent />
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
