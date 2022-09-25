import React, { useState } from 'react';
import Calendar from 'react-calendar';

type Props = {};

const CalendarComponent = (props: Props) => {
	const [ChosenDay, setChosenDay] = useState<string>();

	const DateFormat = (date: string) => {
		let Day = date.slice(0, 3);
		let Month = date.slice(4, 8);

		setChosenDay(`${Day} ${Month}`);
		console.log(ChosenDay);
	};

	return (
		<Calendar
			onClickDay={(value) => {
				console.log(value);
				DateFormat(value.toString());
			}}
		/>
	);
};

export default CalendarComponent;
