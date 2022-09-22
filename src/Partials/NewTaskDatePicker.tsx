import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {};

const NewTaskDatePicker = (props: Props) => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<DatePicker
			selected={startDate}
			onChange={(date: Date) => setStartDate(date)}
		/>
	);
};

export default NewTaskDatePicker;
