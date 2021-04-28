import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ProdutosCollection } from '/imports/api/ProdutosCollection';
import { Produto } from './Produto';
import { ProdutoForm } from './ProdutoForm';

export const App = () => {
    const produtos = useTracker(() => ProdutosCollection.find({}, { sort: { createdAt: -1 } }).fetch());
    const deleteProduto = ({ _id }) => ProdutosCollection.remove(_id);

  return (
    <div>
      <h1>Controle de estoque - vs 1.0</h1>

        <ProdutoForm/>

      <ul>
          { produtos.map(produto => <Produto
              key={ produto._id }
              produto={ produto }
              onDeleteClick={deleteProduto}
          />) }
      </ul>
    </div>
  );
};
