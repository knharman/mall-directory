import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { DEVELOPER_LOGIN } from "../../utils/mutations";
import { Container, Form } from "react-bootstrap";
import Auth from '../../utils/auth';
import './style.css';

const DeveloperLoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(DEVELOPER_LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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