import React, { useState, useEffect } from 'react';

import { getBalance } from '../../services/ProfileService';
import convertToCurrency from '../../utils/parseNumberToCurrency';

import { Container } from 'react-bootstrap';
import './styles.css';

const BalanceView = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(getBalance())
  }, [])

  return (
    <Container className="containerBalance d-flex align-center justify-content-center">
      <h3>
        Seu saldo é <b>{convertToCurrency(balance)}</b>
      </h3>
    </Container>
  );
}

export default BalanceView;