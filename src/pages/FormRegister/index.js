import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Button, Col, Container, InputGroup } from 'react-bootstrap';
import { registerProfile } from '../../services/ProfileService';

import './styles.css';

const FormRegister = () => {
  const initForm = () => {
    return {
      name: '',
      password: '',
      email: '',
      balance: 0.0
    };
  };

  const [form, setForm] = useState(initForm());
  const history = useHistory();

  const setValor = (evento, campo) => {
    setForm({ ...form, [campo]: evento.target.value });
  };

  const submeter = (evento) => {
    evento.preventDefault();

    registerProfile(form, () => {
      history.push('/');
    });
  };

  return (
    <>
      <h4 className="mt-3 mb-3">Cadastro de Usuário</h4>
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

          <Form.Row>
            <Form.Group as={Col} controlId="campoEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={form.email} onChange={(e) => setValor(e, 'email')} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="campoSaldo">
              <Form.Label>Saldo Inicial</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number" min="0" step="0.01" value={form.balance} onChange={(e) => setValor(e, 'balance')} />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Button variant="outline-dark" type="button" onClick={() => history.goBack()}>
            Voltar
          </Button>
          &nbsp;
          <Button variant="success" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default FormRegister;