import "./App.css";
import { useState } from "react";

function App() {
	// State
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [gender, setGender] = useState("");
	const [message, setMessage] = useState("");

	// Handlers
	const nameHandler = (e) => setName(e.target.value);
	const emailHandler = (e) => setEmail(e.target.value);
	const contactHandler = (e) => setContact(e.target.value);
	const genderHandler = (e) => setGender(e.target.value);
	const messageHandler = (e) => setMessage(e.target.value);
	const submitHandler = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			contact,
			gender,
			message,
		};
		setName("");
		setEmail("");
		setContact("");
		setGender("");
		setMessage("");
		console.log(data);
	};

	return (
		<div className='App' onSubmit={submitHandler}>
			<div className='form-wrapper'>
				<form>
					<label htmlFor='name'>Name</label>
					<br />
					<input type='text' id='name' onChange={nameHandler} value={name} />
					<br />
					<label htmlFor='email'>Email</label>
					<br />
					<input
						type='email'
						id='email'
						onChange={emailHandler}
						value={email}
					/>
					<br />
					<label htmlFor='contact'>Contact No</label>
					<br />
					<input
						type='text'
						id='contact'
						onChange={contactHandler}
						value={contact}
					/>
					<br />
					<input
						type='radio'
						id='male'
						name='gender'
						value='male'
						checked={gender === "male"}
						onChange={genderHandler}
					/>
					<label htmlFor='male'> Male </label>
					<input
						type='radio'
						id='female'
						checked={gender === "female"}
						name='gender'
						value='female'
						onChange={genderHandler}
					/>
					<label htmlFor='female'> Female </label>
					<br />
					<label htmlFor='message'> Your Message </label>
					<br />
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						onChange={messageHandler}
						value={message}
					></textarea>
					<br />
					<button type='submit' className='btn'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
