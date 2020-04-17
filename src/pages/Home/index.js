import React from 'react';

import { Row, Col } from 'react-bootstrap';
import BannerMessage from '../../components/BannerMessage';
import MovementsList from '../../components/MovementsList';
import BalanceView from '../../components/BalanceView';

const Home = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <BannerMessage />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <BalanceView />
        </Col>
        <Col sm={6}>
          <MovementsList limit={3} />
        </Col>
      </Row>
    </>
  );
}

export default Home;