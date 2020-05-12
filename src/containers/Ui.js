import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Ui = (props) => {
    return (
        <div className="CovidTrackerUi">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About the app</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className="py-5">
                {props.children}
            </main>
            <footer className="fixed-bottom bg-dark text-white py-4">
                <Container>
                    Copyright {new Date().getFullYear()} - Covid Tracker by <a href="https://www.manuel-inhertz.com">Manuel InHertz</a>
                </Container>
            </footer>
        </div>
    );
}

export default Ui;