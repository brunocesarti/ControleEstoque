import React from 'react';
import { Produto } from './Produto';

const produtos = [
    {_id: 1, nome: 'Celular', quantidade: '3', valor: '1000'},
    {_id: 2, nome: 'Tablet', quantidade: '2', valor: '900'},
    {_id: 3, nome: 'Notebook', quantidade: '1', valor: '3000'},
];

export const App = () => (
  <div>
      <h1>Controle de estoque - versão inicial!</h1>
      <ul>
          { produtos.map(produto => <Produto key={ produto._id } produto={ produto }/>) }
      </ul>
  </div>
);
