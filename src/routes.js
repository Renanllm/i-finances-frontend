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
import FormRegister from './pages/FormRegister';
import Login from './pages/Login';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <PrivateRoute component={Header} />
      <Container className="d-flex justify-content-center flex-column">
        <Switch>
          {/* public routes */}
          <Route path="/register" exact={true}>
            <FormRegister />
          </Route>
          <Route path="/" exact={true}>
            <Login />
          </Route>

          {/* private routes */}
          <PrivateRoute exact={true} path="/home" component={Home} />
          {/* <Route path="/home" exact={true}><Home /></Route> */}
          <PrivateRoute exact={true} path="/movements" component={MovementsList} />
          {/* <Route path="/movements/" exact={true}>
            <MovementsList title="Todas as Movimentações" limit={20} />
          </Route> */}
          <PrivateRoute exact={true} path="/movements/new" component={MovementForm} />
          {/* <Route path="/movements/new"><MovementForm /></Route> */}
          <PrivateRoute exact={true} path="/movements/:idMovement" component={MovementForm} />
          {/* <Route path="/movements/:idMovement">
            <MovementForm />
          </Route> */}
          
          <Route path="*"><NotFound /></Route>

        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;