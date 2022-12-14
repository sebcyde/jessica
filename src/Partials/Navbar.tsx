import React, { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	BsHouseDoor,
	BsClipboardCheck,
	BsPencil,
	BsCalendar2Date,
} from 'react-icons/bs';

type Props = {};

const DashboardNavbar = (props: Props) => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		console.log(location);
	}, [location]);

	const ToDashboard = (): void => {
		navigate('/');
	};
	const ToCalendar = (): void => {
		navigate('/calendar');
	};

	const ToToDos = (): void => {
		navigate('/todos');
	};

	const ToNotes = (): void => {
		navigate('/notes');
	};

	return (
		<div className="flex pos-fixed bot-0 flex-col width-100">
			<h2 className="margin-top-0 margin-bot-thin col-white text-cent">
				Jessica V1.0
			</h2>
			<Navbar className="bg-blue-med width-100  bot-0" variant="dark">
				<Container>
					<Nav className="width-100 flex just-even">
						<Nav.Link onClick={ToDashboard}>
							<BsHouseDoor />
						</Nav.Link>
						<Nav.Link onClick={ToCalendar}>
							<BsCalendar2Date />
						</Nav.Link>
						<Nav.Link onClick={ToToDos}>
							<BsClipboardCheck />
						</Nav.Link>
						<Nav.Link onClick={ToNotes}>
							<BsPencil />
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default DashboardNavbar;
