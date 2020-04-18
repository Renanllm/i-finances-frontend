import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import MovementsList from './components/MovementsList';
import MovementForm from './pages/MovementForm';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Container className="d-flex justify-content-center flex-column">
        <Switch>
          <Route path="/" exact={true}><Home /></Route>
          <Route path="/movements/" exact={true}>
            <MovementsList title="Todas as Movimentações" limit={20}/>
          </Route>
          <Route path="/movements/new"><MovementForm /></Route>
          <Route path="/movements/:idMovement">
            <MovementForm />
          </Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;