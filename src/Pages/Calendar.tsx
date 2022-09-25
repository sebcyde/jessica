import React, { useState } from 'react';
import CalendarComponent from '../Partials/CalendarComponent';
import CalendarDayEvents from '../Partials/CalendarDayEvents';

type Props = {};

const Calendar = (props: Props) => {
	return (
		<div className="Page">
			<CalendarComponent />
			<CalendarDayEvents />
		</div>
	);
};

export default Calendar;
