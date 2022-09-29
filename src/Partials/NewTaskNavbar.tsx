import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

type NewTaskProps = {
	date?: string;
	month?: string;
};

export const NewTaskNavbar = (props: NewTaskProps) => {
	const navigate = useNavigate();

	const NavigateHome = (): void => {
		navigate('/calendar');
	};

	const AddTask = (): void => {};

	return (
		<Navbar className="bg-blue-med">
			<Container>
				<Navbar.Collapse className="justify-content-start">
					<Navbar.Text onClick={NavigateHome} className="col-red">
						cancel
					</Navbar.Text>
				</Navbar.Collapse>
				<Navbar.Brand className="col-white">New event</Navbar.Brand>

				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text onClick={AddTask} className="col-blue-light">
						Add
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NewTaskNavbar;
