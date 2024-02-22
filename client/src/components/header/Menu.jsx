import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './menu.css'
import Search from './Search';

function Menu() {
  return (
    <Navbar expand="lg" className="nav py-3">
      <Container>
        <Navbar.Brand href="#home" className='logo'>KIKE-SA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aspirantes">Aspirantes</Nav.Link>
            <Nav.Link href="/profesiones">Profesiones</Nav.Link>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;