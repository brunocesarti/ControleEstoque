import React from 'react';

export const Produto = ({ produto }) => {
    return <li>{produto.nome} | {produto.quantidade} | {produto.valor}</li>
};