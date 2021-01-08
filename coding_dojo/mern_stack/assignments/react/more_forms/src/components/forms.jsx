import React, { useState } from 'react'

const UserForm = props => {
	const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [firstNameError, setFirstNameError] = useState("")
	const [lastNameError, setLastNameError] = useState("")
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")
	const [passwordConfirmError, setPasswordConfirmError] = useState("")
	
	
		
		const fName = firstName
		const lName = lastName
		const emailAddress = email
		const pwd = password
		const cp = passwordConfirm
		// const initialState = {
		// 	firstName: {
		// 		value: '',
		// 		error: null
		// 	},
		// 	lastName: {
		// 		value: '',
		// 		error: null
		// 	},
		// 	email: {
		// 		value: '',
		// 		error: null
		// 	},
		// 	password: {
		// 		value: '',
		// 		error: null
		// 	},
		// 	passConfirm: {
		// 		value: '',
		// 		error: null
		// 	},

		// }

		const handleFirstName = (e) => {
			
			setFirstName(e.target.value)

				if (e.target.value.length < 2 && e.target.value.length !== 0){
					setFirstNameError("First Name must be longer than 2 characters")
				}
				else {
					setFirstNameError('')
				}
				console.log(setFirstName)
		}

		const handleLastName = (e) => {
			
			setLastName(e.target.value)

				if (e.target.value.length < 2 && e.target.value.length !== 0){
					setLastNameError("Last Name must be longer than 2 characters")
				}
				else {
					setLastNameError('')
				}
			
		}

		const handleEmail = (e) => {
			
			setEmail(e.target.value)
			
				if (e.target.value.length < 2 && e.target.value.length !== 0){
					setEmailError("Email must be longer than 2 characters")
				}
				else {
					setEmailError('')
				}
		}
		

		const handlePassword = (e) => {
			
			setPassword(e.target.value)
			
				if (e.target.value.length < 8 && e.target.value.length !== 0){
					setPasswordError("First Name must be longer than 8 characters")
				}
				else {
					setPasswordError('')
				}
			
		}

		const handlePasswordConfirm = (e) => {
			
			setPasswordConfirm (e.target.value)
			
				console.log("Password Confirm: " + e.target.value)
				console.log("Password: " + pwd)
				if (e.target.value !== pwd && e.target.value.length !== 0){
					setPasswordConfirmError("Passwords must match!")
				}
				else {
					setPasswordConfirmError('')
				}
			
		}
			
		
	
		const createUser = e => {
			e.preventDefault();
			const newUser = { firstName, lastName, email, password, passwordConfirm };
			console.log("Welcome", newUser)
			setFirstName("")
			setLastName("")
			setEmail("")
			setPassword("")
			setPasswordConfirm("")
		}
		return(
			<>
			<form onSubmit={createUser}>
					<div>
						<label>First name: </label>
						<input type="text" onChange={ handleFirstName }  value={ firstName }/>
					</div>

					
					<p>{firstNameError}</p>

					<div>
						<label>Last Name: </label>
						<input type="text" onChange={ handleLastName} value={lastName}/>
					</div>


					<p>{lastNameError}</p>

					<div>
						<label>Email: </label>
						<input type="text" onChange={ handleEmail } value={email}/>
					</div>
					

					<p>{emailError}</p>
					<div>
						<label>Password: </label>
						<input type="text" onChange={ handlePassword } value={password}/>
					</div>
					

					<p>{passwordError}</p>
					<div>
						<label>Confirm Password: </label>
						<input type="text" onChange={ handlePasswordConfirm } value={passwordConfirm}/>
					</div>

					<p>{passwordConfirmError}</p>
					<input type="submit" value="Create User" />
				</form>

				<p>First Name: {fName}</p>
				<p>Last Name: {lName}</p>
				<p>Email: {emailAddress}</p>
				<p>Password: {pwd}</p>
				<p>Confirm Password: {cp} </p>
			</>

			
			
	)
	
	
}

export default UserForm