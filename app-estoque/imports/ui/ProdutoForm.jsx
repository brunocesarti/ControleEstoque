import React, { useState } from 'react';

export const ProdutoForm = () => {
    const [text, setText] = useState("");

    return (
        <form className="produto-form">
            <input
                type="text"
                placeholder="Nome"
            />
            <input
                type="number"
                placeholder="Quantidade"
            />
            <input
                type="number"
                placeholder="Valor"
            />

            <button type="submit">Cadastrar Produto</button>
        </form>
    );
};