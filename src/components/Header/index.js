import React from 'react';

import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './styles.css';

const Header = () => {
  const history = useHistory();

  return (
    <Navbar className="d-flex justify-content-center" collapseOnSelect expand="lg" bg="success" variant="dark">
      <div className="d-flex">
        <Navbar.Brand className="logoName" onClick={() => history.push('/')}>
          <b>iFinances</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push('/movements')}>Movimentações</Nav.Link>
            <Nav.Link onClick={() => history.push('/movements/new')}>Add Movimentação</Nav.Link>
            <NavDropdown title="Config" id="collasible-nav-dropdown">
              <NavDropdown.Item >Opt1</NavDropdown.Item>
              <NavDropdown.Item >Opt2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Opt3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;