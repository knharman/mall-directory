import React, { useState } from "react";
import { useMutation } from '@apollo/client';
// import { validateEmail } from '../../utils/helpers';
import { DEVELOPER_LOGIN } from "../../utils/mutations";
import { Container, Form } from "react-bootstrap";
import Auth from '../../utils/auth';
import './style.css';


const DeveloperLoginForm = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const { email, password } = formState;
    // const [errorMessage, setErrorMessage] = useState('');
    const [login, { error }] = useMutation(DEVELOPER_LOGIN);

    // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }

    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value })
    //     }
    // }


    
    return (
        <>
            <Container>
                <Form id="login-form" onSubmit={handleFormSubmit}>
                    <Form.Group controlId="form.Email">
                        <Form.Label className="login-input" htmlFor="email">Email:</Form.Label>
                        <br />
                        <Form.Control id='email' name="email" type="email" value={formState.email} onChange={handleChange} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Password">
                        <Form.Label className="login-input" htmlFor="password">Password:</Form.Label>
                        <br />
                        <Form.Control id='password' name='password' type="password" value={formState.password} onChange={handleChange} placeholder="Please enter your case-sensitive password" />
                    </Form.Group>
                    <button className="login-button" type="submit">Login</button>
                    {error && <div className="error-text">Login failed</div>}
                </Form>
            </Container>
        </>
    )
}

export default DeveloperLoginForm;