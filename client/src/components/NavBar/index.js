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
           {Auth.loggedIn() ? (
            <Container className="nav-bar nav-bar1 sticky" fluid>
                <Row lg={12} className="nav-row">
                    <Col md={3}><Nav.Link href="/" className='nav-title nav-title1'>Mall Direct</Nav.Link></Col>
                    <Col md={9}>
                        <Nav className="">
                         
                                <>
                                    <Nav.Link href="/" className="ms-auto margin-none nav-title nav-title1">Customer Home</Nav.Link>
                                    <Nav.Link href="/dashboard" className="ms-auto margin-none nav-title nav-title1">Dashboard</Nav.Link>
                                    <Nav.Link onClick={logout} className="ms-auto margin-none nav-title nav-title1">Logout</Nav.Link>
                                </>
                          
                        </Nav>
                    </Col>
                </Row>
            </Container>



            ) : (
                <>
           

            <Container className="nav-bar nav-bar2 sticky" fluid>
                <Row lg={12} className="nav-row">
                    <Col md={3}><Nav.Link href="/" className='nav-title nav-title2'>Mall Direct</Nav.Link></Col>
                    <Col md={9}>
                    </Col>
                </Row>
            </Container>

            </>
            )}


        </>
    )
}

export default AppNavbar;