import React, { useState } from 'react';
import CalendarComponent from '../Partials/CalendarComponent';

type Props = {};

const Calendar = (props: Props) => {
	return (
		<div className="Page">
			<CalendarComponent />
		</div>
	);
};

export default Calendar;
