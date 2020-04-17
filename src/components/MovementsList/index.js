import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Moment from 'moment';
import { getMovements } from '../../services/MovementService';
import convertToCurrency from '../../utils/parseNumberToCurrency';

import { Table } from 'react-bootstrap';
import './styles.css'

const MovementsList = ({ title }) => {
  const [movements, setMovements] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getMovements((response) => setMovements(response.data));
  }, []);

  const renderMovements = (movement) => {
    return (
      <tr
        className="linePointer"
        key={movement._id}
        onClick={() => history.push(`/movements/${movement._id}`)}>
        <td>{movement.name}</td>
        <td>{Moment(movement.createdAt).format('DD/MM/YYYY')}</td>
        <td>{movement.category}</td>
        <td>{movement.type === 'Saída' ? '-' : ''}{convertToCurrency(movement.value)}</td>
      </tr>
    );
  }

  return (
    <div className={title ? 'mt-3' : ''}>
      <h4 className="mb-3">{title || 'Últimas Movimentações'}</h4>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {movements.map(renderMovements)}
        </tbody>
      </Table>
    </div>
  )
}

export default MovementsList;