import React, { useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { getMovement, registerMovement, updateMovement } from '../../services/MovementService';
import { getCategories } from '../../services/CategoryService';

import { Form, Button, Col, Container, InputGroup } from 'react-bootstrap';
import './styles.css';

const MovementForm = () => {
  const initForm = () => {
    return {
      name: '',
      category: 'Alimentação',
      value: 0.0,
      type: 'Saída'
    };
  };

  const [form, setForm] = useState(initForm());
  const [categories, setCategories] = useState({ data: [], type: null });
  const { idMovement } = useParams();
  const history = useHistory();
  const types = ['Saída', 'Entrada'];

  useEffect(() => {
    if (idMovement !== undefined) {
      getMovement(idMovement, (response) => {
        const movement = response.data;
        setForm({
          name: movement.name,
          value: movement.value,
          category: movement.category,
          type: movement.type
        })
      });
    } else {
      setForm(initForm());
    }
  }, [idMovement]);

  useEffect(() => {
    setCategories(getCategories('Expense'));
  }, [])

  const setValor = (evento, campo) => {
    setForm({ ...form, [campo]: evento.target.value });
    if (campo === 'type') {
      verifyCategories(evento.target.value);
    }
  };

  const verifyCategories = (typeValue) => {
    if (typeValue !== categories.type) {
      setCategories(getCategories(typeValue));
    }
  }

  const submeter = (evento) => {
    evento.preventDefault();
    if (idMovement === undefined) {
      registerMovement(form, () => {
        history.push('/home');
      });
    } else {
      updateMovement(idMovement, form, () => {
        history.push('/home');
      });
    }
  };

  const renderOption = (option) => {
    return (
      <option key={option} value={option}>{option}</option>
    );
  }

  return (
    <>
      <h4 className="mt-3 mb-3">{idMovement ? 'Edição ' : 'Cadastro '}de Movimentação</h4>
      <Container className="d-flex justify-content-center">
        <Form className="containerForm" onSubmit={(e) => submeter(e)}>
          <Form.Row>
            <Form.Group as={Col} controlId="campoName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" value={form.name} onChange={(e) => setValor(e, 'name')} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="campoType">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                as="select"
                value={form.type}
                onChange={(e) => setValor(e, 'type')}
              >
                {types.map(renderOption)}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="campoCategory">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select" value={form.category} onChange={(e) => setValor(e, 'category')}>
                {categories.data.map(renderOption)}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="campoValue">
              <Form.Label>Valor</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number" min="0" step="0.01" value={form.value} onChange={(e) => setValor(e, 'value')} />
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

export default MovementForm;