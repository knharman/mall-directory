import React, { useState } from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import './style.css';
import '../../index.css';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';  

const AppNavbar = () => {
    const yes = true
    return (
        <>
            <Container className="nav-bar" fluid>
                <Row lg={12} className="nav-row">
                    <Col md={4}><Nav.Link href="/" className="nav-title">Mall Direct</Nav.Link></Col>
                    <Col md={4} ><Nav.Link className="text-center nav-title">Logo</Nav.Link></Col>
                    <Col md={4}>
                        <Nav className="container-fluid">
                            <Nav.Link href="/" className="ms-auto  nav-title">Customer Home</Nav.Link>
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