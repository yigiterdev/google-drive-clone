import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavbarComponent() {
  return (
    <Navbar bg="success" expand="sm">
      <Navbar.Brand as={Link} to="/" className="p-4 text-light">
        <FontAwesomeIcon icon={faUpload} /> yigiterDrive
      </Navbar.Brand>
      <Nav className="ml-auto p-4">
        <Nav.Link as={Link} to="/user" className="text-light">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
