import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './style.css';

const AppNavbar = () => {
    return (
        <>
            <Container>
                <Navbar className="nav-bar" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Container>
        </>
    )
}

export default AppNavbar;