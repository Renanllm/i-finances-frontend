import React from 'react';

import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './styles.css';

const Header = () => {
  const history = useHistory();

  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Navbar.Brand className="logoName" onClick={() => history.push('/')}>
        <b>iFinances</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => history.push('/movements')}>Movimentações</Nav.Link>
          <Nav.Link onClick={() => history.push('/movements/new')}>Add Movimentação</Nav.Link>
          <NavDropdown title="Config" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Opt1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Opt2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Opt3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;