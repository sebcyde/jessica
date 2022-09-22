import React from 'react';
import NewTaskNavbar from '../Partials/NewTaskNavbar';

type Props = {};

export const NewTask = (props: Props) => {
	return (
		<div className="Page">
			<NewTaskNavbar />
			NewTask
		</div>
	);
};

export default NewTask;
