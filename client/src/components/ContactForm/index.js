import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';
import { Container, Form } from "react-bootstrap";
import './style.css';

function ContactForm() {
    const [formState, setFormState] = useState({ Name: '', Email: '', Message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

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
                <Form id="contact-form" target="_blank" action="https://formsubmit.co/8dfa36473550abfc2499eaf5bcafa6eb" method="POST">
                    <Form.Group controlId="form.Name">
                        <Form.Label className="contact-input" htmlFor="name">Name:</Form.Label>
                        <br/>
                        <Form.Control type="text" className="col-lg-12" defaultValue={name} name="name" onBlur={handleChange} placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label className="contact-input" htmlFor="email">Email address:</Form.Label>
                        <br/>
                        <Form.Control type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label className="contact-input" htmlFor="message">Message:</Form.Label>
                        <br/>
                        <Form.Control className="contact-message" as="textarea" name="message" defaultValue={message} rows="6" onBlur={handleChange} placeholder="Enter your question or request here" />
                    </Form.Group>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="contact-button" type="submit">Submit</button>
                </Form>
            </Container>
            </>
    )
}

export default ContactForm;