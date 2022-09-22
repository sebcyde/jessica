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
		navigate('/');
	};

	return (
		<Navbar>
			<Container>
				<Navbar.Brand href="#home">Add new event</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text onClick={NavigateHome}>cancel</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NewTaskNavbar;
