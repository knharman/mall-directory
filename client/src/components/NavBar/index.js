import React, { useState } from "react";
import Auth from '../../utils/auth';
import { Container, Navbar, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../../index.css';

const AppNavbar = () => {
    const yes = true
    const customer = 'nav-title'
    return (
        <>
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

            <Container className="nav-bar" fluid>
                <Row lg={12} className="nav-row">
                    <Col md={6}><Nav.Link href="/" className={customer}>Mall Direct</Nav.Link></Col>
                    {/* <Col md={4}><Nav.Link className="text-center text-left nav-title">Logo</Nav.Link></Col> */}
                    <Col md={6}>
                        <Nav className="container-fluid">
                            {yes ? (
                                <Nav.Link href="/" className="ms-auto margin-none nav-title">Customer Home</Nav.Link>
                            ) : ''}
                            {yes ? (
                                <Nav.Link onClick={Auth.logout} className="nav-title">Logout</Nav.Link>
                            ) : ''}
                        </Nav>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default AppNavbar;