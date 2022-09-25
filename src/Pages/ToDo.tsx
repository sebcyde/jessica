import Moment from 'moment';
import { IToDo, InitialToDo } from '../Interfaces/NewToDo';
import React, { useEffect, useState } from 'react';
import { BsExclamationCircle, BsPlusSquare } from 'react-icons/bs';
import ToDoList from '../Partials/ToDoList';
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

const ToDo = () => {
	const formatDate = Moment().format('MMMM Do YYYY');
	const [show, setShow] = useState(false);
	const [RenderTodo, setRenderTodo] = useState<JSX.Element[]>();
	const [NewTodo, setNewTodo] = useState<IToDo>(InitialToDo);
	const [Todos, setTodos] = useState<IToDo[]>();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo({
			...NewTodo,
			[e.target.name]: e.target.value,
		});
	};

	const createToDo = () => {
		setTodos(Todos != undefined ? [...Todos, NewTodo] : [NewTodo]);
		setNewTodo(InitialToDo);
		console.log(NewTodo);
		console.log('New todo added');
	};

	const Explain = () => {
		console.log(NewTodo);
		console.log(Todos);
	};

	return (
		<div className="Page">
			<span className="width-90 flex align-cent just-apart pad-top-thin col-white margin-left-a margin-right-a">
				<h3 className="margin-bot-0 col-white">{formatDate}</h3>
				<BsPlusSquare onClick={handleShow} />
			</span>
			<Button
				onClick={Explain}
				className="margin-left-a margin-right-a width-100  margin-top-thin margin-bot-thin"
			>
				Explain
			</Button>

			{Todos === undefined ? (
				<h2 className="col-white text-cent">No To Dos</h2>
			) : (
				''
			)}

			{Todos != undefined
				? Todos!.map((ToDo: IToDo): JSX.Element => {
						return (
							<div className="width-100 col-white">
								<span className="width-100 flex just-apart">
									<h3 className="margin-bot-0 margin-top-0">{ToDo.name}</h3>
									{ToDo.important ? <BsExclamationCircle /> : ''}
								</span>
								<h4>{ToDo.location}</h4>
								{ToDo.notes ? <p>{ToDo.notes}</p> : ''}
							</div>
						);
				  })
				: ''}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header className="bg-blue-light" closeButton>
					<Modal.Title>Create To Do</Modal.Title>
				</Modal.Header>
				<Modal.Body className="bg-blue-light border-bot-none">
					<Form.Group
						className="mb-3 mt-1 width-100 "
						controlId="formBasicEmail"
					>
						<Form.Control
							type="text"
							placeholder="Title"
							className="width-100 mb-3"
							name="name"
							value={NewTodo.name}
							onChange={handleChange}
						/>
						<Form.Control
							type="text"
							placeholder="Location"
							className="width-100"
							name="location"
							value={NewTodo.location}
							onChange={handleChange}
						/>
					</Form.Group>
					<Container className="col-blue-dark pad-right-none mb-2">
						<span className="width-100 flex just-apart">
							<Form.Label>Important</Form.Label>
							<Form.Check
								type="checkbox"
								id="custom-switch"
								name="important"
								// value={NewTodo.important}
								onChange={handleChange}
							/>
						</span>
					</Container>
					<InputGroup className="mb-0">
						<Form.Control
							as="textarea"
							aria-label="With textarea"
							placeholder="Extra notes..."
							name="notes"
							value={NewTodo.notes}
							onChange={handleChange}
						/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer className="bg-blue-light border-top-none">
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							createToDo();
							handleClose();
						}}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ToDo;
