import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSiteNav from '../LeftSiteNav/LeftSiteNav';

const Header = () => {
    return (
        <Navbar className='mb-3' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Webcode News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">All News</Nav.Link>
                        <Nav.Link href="#link">Categories</Nav.Link>
                        {/* <Nav.Link href="#link">All News</Nav.Link> */}
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSiteNav></LeftSiteNav>
                    </div>
                </Navbar.Collapse>

            </Container>


        </Navbar>
    );
};

export default Header;