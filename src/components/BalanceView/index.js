import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getProfile } from '../../services/ProfileService';
import convertToCurrency from '../../utils/parseNumberToCurrency';

import './styles.css';

const BalanceView = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile((response) => {
      setProfile(response.data);
    })
  }, []);

  return (
    <Container className="containerBalance d-flex align-center justify-content-center flex-column">
      <h3>
        Olá, {`${profile.name} :)`}
      </h3>
      <h3>
        Seu saldo é <b>{convertToCurrency(profile.balance)}</b>
      </h3>
    </Container>
  );
}

export default BalanceView;