import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import DashboardUpcoming from '../Partials/DashboardUpcoming';
import { NewTaskContext } from '../Context/NewTaskContext';
import CalendarComponent from '../Partials/CalendarComponent';

type Props = {};

const Dashboard = (props: Props) => {
	const navigate = useNavigate();
	const formatDate = Moment().format('MMMM Do YYYY');

	const viewCalendar = (): void => {
		navigate('/calendar');
	};

	console.log(NewTaskContext);

	return (
		<div className="Page flex flex-col  ">
			<h3 className="margin-bot-0 margin-top-thin text-left margin-left-thin col-white">
				{formatDate}
			</h3>
			<DashboardUpcoming />
			<Button
				onClick={viewCalendar}
				className="width-95 margin-left-a margin-right-a margin-bot-thin"
			>
				View Calendar
			</Button>
		</div>
	);
};

export default Dashboard;
