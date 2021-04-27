import React from 'react';

export const Produto = ({ produto }) => {
    return <li>{produto.text.nome} | {produto.text.quantidade} | {produto.text.valor}</li>
};