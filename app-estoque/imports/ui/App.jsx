import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ProdutosCollection } from '/imports/api/ProdutosCollection';
import { Produto } from './Produto';
import { ProdutoForm } from './ProdutoForm';

const deleteProduto = ({ _id }) => ProdutosCollection.remove(_id);

export const App = () => {
    const produtos = useTracker(() => ProdutosCollection.find({}, { sort: { createdAt: -1 } }).fetch());

    return (
        <div className="app">
            <header>
                <div className="app-bar">
                    <div className="app-header">
                        <h1>📝️ Controle de Estoque</h1>
                    </div>
                </div>
            </header>

            <div className="main">
                <ProdutoForm />

                <ul className="produtos">
                    { produtos.map(produto => (
                        <Produto
                        key={produto._id}
                        produto={produto}
                        onDeleteClick={deleteProduto}
                    />
                    ))}
                </ul>
            </div>
        </div>
    );


};
