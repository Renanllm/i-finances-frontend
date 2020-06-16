import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Button, Col, Container } from 'react-bootstrap';
import { login, logout } from '../../services/ProfileService';

import './styles.css';

const Login = () => {
  const initForm = () => {
    return {
      name: '',
      password: '',
    };
  };

  const [form, setForm] = useState(initForm());
  const history = useHistory();

  useEffect(() => {
    logout();
    history.push('/login');
  }, []);

  const setValor = (evento, campo) => {
    setForm({ ...form, [campo]: evento.target.value });
  };

  const submeter = (evento) => {
    evento.preventDefault();

    login(form, () => {
      history.push('/home');
    }, () => {
      setForm(initForm());
      alert('Credenciais inválidas! :c');
    });
  };

  return (
    <>
      <h4 className="mt-3 mb-3">Login</h4>
      <Container className="d-flex justify-content-center">
        <Form className="containerForm" onSubmit={(e) => submeter(e)}>
          <Form.Row>
            <Form.Group as={Col} controlId="campoName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" value={form.name} onChange={(e) => setValor(e, 'name')} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="campoPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} onChange={(e) => setValor(e, 'password')} />
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" type="button" onClick={() => history.push('/')}>
            Voltar
          </Button>
          &nbsp;
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Login;