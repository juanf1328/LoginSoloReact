import React, { useState } from 'react';
function Login({ login, error }) {
	const [details, setDetails] = useState({name: "", email: "", password: ""});

	const submitHandler = e => {
		e.preventDefault();

		login(details);
	}

	return (
		<form onSubmit={submitHandler}>	
            <h2>Works</h2>
		</form>
		);
}
export default First;