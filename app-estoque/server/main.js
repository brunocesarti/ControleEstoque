import { Meteor } from 'meteor/meteor';
import { ProdutosCollection } from '/imports/api/ProdutosCollection';

const insertProduto = produtoText => ProdutosCollection.insert( produtoText );

Meteor.startup(() => {
  if (ProdutosCollection.find().count() === 0) {
    [
        { nome: 'Celular Motorola', quantidade: 3, valor: 1000 },
        { nome: 'Tablet Sansung', quantidade: 2, valor: 900 },
        { nome: 'Notebook Acer', quantidade: 1, valor: 3000 },
    ].forEach(insertProduto)
  }
});