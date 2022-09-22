import React from 'react';
import NewTaskDetails from '../Partials/NewTaskDetails';
import NewTaskNavbar from '../Partials/NewTaskNavbar';

type Props = {};

export const NewTask = (props: Props) => {
	return (
		<div className="Page">
			<NewTaskNavbar />
			<NewTaskDetails />
		</div>
	);
};

export default NewTask;
