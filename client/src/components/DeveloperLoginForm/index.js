import React, { useState } from "react";
// import { useMutation } from '@apollo/client';
import { validateEmail } from '../../utils/helpers';
// import { DEVELOPER_LOGIN } from "../../utils/mutations";
import { Container, Form } from "react-bootstrap";
// import Auth from '../utils/auth';
import './style.css';

function DeveloperLoginForm() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const { email, password } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // const [login, { error }] = useMutation(DEVELOPER_LOGIN);

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    return (
        <>
            <Container>
                <Form id="login-form" >
                    <Form.Group controlId="form.Email">
                        <Form.Label className="login-input" htmlFor="email">Email:</Form.Label>
                        <br />
                        <Form.Control type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Password">
                        <Form.Label className="login-input" htmlFor="password">Password:</Form.Label>
                        <br />
                        <Form.Control type="password" defaultValue={password} name="password" onBlur={handleChange} placeholder="Please enter your case-sensitive password" />
                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="login-button" type="submit">Login</button>
                </Form>
            </Container>
        </>
    )
}

export default DeveloperLoginForm;