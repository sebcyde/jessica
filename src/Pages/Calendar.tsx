import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '../Partials/CalendarComponent';
import CalendarDayEvents from '../Partials/CalendarDayEvents';

type Props = {};

const Calendar = (props: Props) => {
	const navigate = useNavigate();

	const addEvent = (): void => {
		navigate('/newtask');
	};

	return (
		<div className="Page">
			<CalendarComponent />

			<Button
				onClick={addEvent}
				className="block width-95 margin-left-a margin-right-a margin-bot-thin"
			>
				+ New Event
			</Button>
			<CalendarDayEvents />
		</div>
	);
};

export default Calendar;
