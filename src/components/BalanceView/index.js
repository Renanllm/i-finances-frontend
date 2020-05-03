import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, Modal } from 'react-bootstrap';
import { getProfile, registerProfile } from '../../services/ProfileService';
import convertToCurrency from '../../utils/parseNumberToCurrency';
import './styles.css';



const BalanceView = () => {
  const initForm = () => {
    return {
      name: '',
      email: '',
      balance: 0.0,
    };
  };

  const [form, setForm] = useState(initForm());
  const [profile, setProfile] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProfile((response) => {
      if (response) {
        setProfile(response.data);
      }
    })
  }, []);

  const setValor = (evento, campo) => {
    setForm({ ...form, [campo]: evento.target.value });
  };

  const submeter = () => {
    registerProfile(form, (response) => {
      setProfile(response.data);
      setForm(initForm());
      handleClose();
    })
  };

  const noProfile = () => {
    return (
      <>
        <h3>Por favor, se cadastre para melhor controle financeiro!</h3>
        <Button className="mt-3" variant="primary" size="lg" onClick={handleShow}>Cadastrar</Button>
      </>
    );
  }

  return (
    <>
      <Container className="containerBalance d-flex align-center justify-content-center flex-column">
        {profile != null ?
          noProfile() :
          <>
            <h3>
              Olá, {`${profile.name} :)`}
            </h3>
            <h3>
              Seu saldo é <b>{convertToCurrency(profile.balance)}</b>
            </h3>
          </>
        }
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Usuário</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="containerModalForm">
            <Form.Row>
              <Form.Group as={Col} controlId="campoName">
                <Form.Label>Nome</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>:)</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Nome" value={form.name} onChange={(e) => setValor(e, 'name')} />
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="campoEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="email" placeholder="Email" value={form.email} onChange={(e) => setValor(e, 'email')} />
                </InputGroup>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="campoBalance">
                <Form.Label>Saldo</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="number" min="0" step="0.01" value={form.balance} onChange={(e) => setValor(e, 'balance')} />
                </InputGroup>
              </Form.Group>
            </Form.Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={() => submeter()}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BalanceView;