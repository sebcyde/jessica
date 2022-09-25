import React, { useState } from 'react';
import Calendar from 'react-calendar';

// const CalendarComponent = require('react-calendar');

type Props = {};

const CalendarComponent = (props: Props) => {
	const [ChosenDate, setChosenDate] = useState<Date>();

	return (
		<Calendar
			onClickDay={(value) => {
				setChosenDate(value);
				console.log(ChosenDate);
			}}
		/>
	);
};

export default CalendarComponent;
