import React from "react";
import Auth from '../../utils/auth';
import { Container, Nav, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../../index.css';

const AppNavbar = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <>
            <Container className="nav-bar sticky" fluid>
                <Row lg={12} className="nav-row">
                    <Col md={6}><Nav.Link href="/" className='nav-title'>Mall Direct</Nav.Link></Col>
                    <Col md={6}>
                        <Nav className="container-fluid">
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link href="/" className="ms-auto margin-none nav-title">Customer Home</Nav.Link>
                                    <Nav.Link href="/dashboard" className="ms-auto margin-none nav-title">Dashboard</Nav.Link>
                                    <Nav.Link onClick={logout} className="ms-auto margin-none nav-title">Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AppNavbar;