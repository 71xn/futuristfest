import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

export default function App() {
	const [message, setMessage] = useState("Guest");

	const fetchWelcome = async (name) => {
		const apiURL = "https://futuristfest.herokuapp.com/getmsg/?name=" + name;
		const response = await fetch(apiURL);
		const data = await response.json();
		setMessage(data.message);
		console.log(data);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		fetchWelcome(data.Name);
	};
	console.log(errors);

	return (
		<div>
			<p>
				<b>{message}</b>
			</p>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Name"
						{...register("Name", { required: true })}
					/>
					<Form.Text className="text-muted">
						We'll never share your name with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicText">
					<Form.Label>Question</Form.Label>
					<Form.Control
						type="text"
						placeholder="Question or Query"
						{...register("Question", { required: true })}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
