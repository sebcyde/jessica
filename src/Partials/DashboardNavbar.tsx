import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

type Props = {};

const DashboardNavbar = (props: Props) => {
	const navigate = useNavigate();

	const ToAbout = (): void => {
		navigate('/about');
	};

	const ToProfile = (): void => {
		navigate('/profile');
	};

	const ToSettings = (): void => {
		navigate('/settings');
	};

	return (
		<Navbar className="bg-blue-med width-100 pos-fixed bot-0" variant="dark">
			<Container>
				<Nav className="width-100 flex just-even">
					<Nav.Link onClick={ToProfile}>Home</Nav.Link>
					<Nav.Link onClick={ToProfile}>ToDo</Nav.Link>
					<Nav.Link onClick={ToSettings}>Notes</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default DashboardNavbar;
