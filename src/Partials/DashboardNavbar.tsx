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

	return (
		<Navbar className="bg-blue-med width-100" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Jessica</Navbar.Brand>
				<Nav className="margin-left-a">
					<Nav.Link>Home</Nav.Link>
					<Nav.Link onClick={ToProfile}>Profile</Nav.Link>
					<Nav.Link onClick={ToAbout}>About</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default DashboardNavbar;
