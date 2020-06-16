import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { logout } from '../../services/ProfileService';
import SecurityService from '../../services/SecurityService';

import './styles.css';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setShowHeader(SecurityService.isAutenticado());
  }, [history.location]);

  const logoutUser = () => {
    logout();
    history.push('/');
  };

  return (
    <>
      {showHeader ? (
        <Navbar className="d-flex justify-content-center" collapseOnSelect expand="lg" bg="success" variant="dark">
        <div className="d-flex">
          <Navbar.Brand className="logoName" onClick={() => history.push('/home')}>
            <b>iFinances</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => history.push('/movements')}>Movimentações</Nav.Link>
              <Nav.Link onClick={() => history.push('/movements/new')}>Add Movimentação</Nav.Link>
              <Nav.Link onClick={() => logoutUser()}>Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      ) : (<></>)}
    </>
  );
}

export default Header;