import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { logout } from '../../services/ProfileService';

import { Button, Container } from 'react-bootstrap';
import BannerMessage from '../../components/BannerMessage';

import peopleImg from '../../assets/people.png';
import './styles.css';

const FirstPage = () => {

  const history = useHistory();

  useEffect(() => {
    logout();
    history.push('/');
  }, []);

  return (
    <>
      <div className="container-header">
        <h4 className="mt-3 mb-3">iFinances</h4>
        <div className="container-btns">
          <Button
            variant="primary"
            className="mr-2"
            type="submit"
            onClick={() => history.push('/register')}
          >
            Cadastrar
          </Button>
          <Button
            variant="success"
            type="submit"
            onClick={() => history.push('/login')}
          >
            Entrar
          </Button>
        </div>
      </div>
      <BannerMessage />
      <Container className="d-flex justify-content-center">
        <img className="people-img" src={peopleImg} alt="person" />
      </Container>
    </>
  )
}

export default FirstPage;