import React from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

const BannerMessage = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>
          <span role="img" aria-label="sheep">
            💵
          </span>
          Seja bem-vindo ao iFinances
          <span role="img" aria-label="sheep">
            💵
          </span>
        </h1>
        <h5>
          O seu sistema de organização financeira!
        </h5>
      </Container>
    </Jumbotron>
  );
}

export default BannerMessage;