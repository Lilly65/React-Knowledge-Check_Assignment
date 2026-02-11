// src/components/NavBar.jsx

import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Brand href="/">Responsive Navigation Bar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" activeclassname="active">
            About Us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" activeclassname="active">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/imgbutton" activeclassname="active">
            Image And Button Page
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;