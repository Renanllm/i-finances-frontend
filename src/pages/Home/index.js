import React from 'react';

import { Row, Col } from 'react-bootstrap';
import BannerMessage from '../../components/BannerMessage';
import MovementsList from '../../components/MovementsList';

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
          <MovementsList />
        </Col>
      </Row>
    </>
  );
}

export default Home;