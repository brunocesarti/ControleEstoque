import React from 'react';

export const Produto = ({ produto, onDeleteClick }) => {
    return <ul>{produto.nome} | {produto.quantidade} | {produto.valor} <button onClick={ () => onDeleteClick(produto) }>&times;</button></ul>
};