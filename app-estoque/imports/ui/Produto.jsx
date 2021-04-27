import React from 'react';

export const Produto = ({ produto }) => {
    return <ul>{produto.nome} | {produto.quantidade} | {produto.valor}</ul>
};