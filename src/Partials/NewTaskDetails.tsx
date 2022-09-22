import React, { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { NewTaskContext } from '../Context/NewTaskContext';
import NewTaskDatePicker from './NewTaskDatePicker';

const NewTaskDetails = () => {
	console.log(NewTaskContext);

	return (
		<Form className="flex flex-col align-cent width-95 margin-left-a margin-right-a">
			<h2 className="mt-3 col-white">Event Details</h2>
			<Form.Group className="mb-3 mt-3 width-100 " controlId="formBasicEmail">
				<Form.Control
					type="text"
					placeholder="Title"
					className="width-100 mb-3"
				/>
				<Form.Control
					type="text"
					placeholder="Location"
					className="width-100"
				/>
			</Form.Group>

			<Form.Group className="mb-3 flex just-apart width-100">
				<Container className="col-white pad-right-none">
					<span className="mb-2 width-100 flex just-apart">
						<Form.Label>All-Day</Form.Label>
						<Form.Check type="switch" id="custom-switch" />
					</span>
					<span className="mb-2 width-100 flex just-apart">
						<Form.Label>Starts</Form.Label>
						<Form.Check type="switch" id="custom-switch" />
					</span>
					<span className="mb-2 width-100 flex just-apart">
						<Form.Label>Ends</Form.Label>
						<Form.Check type="switch" id="custom-switch" />
					</span>
					<span className="width-100 flex just-apart">
						<Form.Label>Important</Form.Label>
						<Form.Check type="switch" id="custom-switch" />
					</span>
				</Container>
			</Form.Group>

			<InputGroup className="mb-3">
				<Form.Control
					as="textarea"
					aria-label="With textarea"
					placeholder="Notes..."
				/>
			</InputGroup>
			<Button variant="primary" type="submit" className="width-100">
				Create Event
			</Button>
		</Form>
	);
};

export default NewTaskDetails;
