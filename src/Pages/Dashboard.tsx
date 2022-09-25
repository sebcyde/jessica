import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DashboardUpcoming from '../Partials/DashboardUpcoming';
import { NewTaskContext } from '../Context/NewTaskContext';
import CalendarComponent from '../Partials/CalendarComponent';

type Props = {};

const Dashboard = (props: Props) => {
	const navigate = useNavigate();

	const addEvent = (): void => {
		navigate('/newtask');
	};

	const viewCalendar = (): void => {
		navigate('/calendar');
	};

	console.log(NewTaskContext);

	return (
		<div className="Page flex flex-col  ">
			<h2 className="margin-top-thin col-white text-cent">Jessica V1.0</h2>
			<h3 className="margin-bot-0 text-left margin-left-thin col-blue-light">
				Today
			</h3>
			<DashboardUpcoming />
			<Button
				onClick={viewCalendar}
				className="width-95 margin-left-a margin-right-a margin-bot-thin"
			>
				View Calendar
			</Button>
			<Button
				onClick={addEvent}
				className="width-95 margin-left-a margin-right-a margin-bot-thin"
			>
				+ New Event
			</Button>
		</div>
	);
};

export default Dashboard;
