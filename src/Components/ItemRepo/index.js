import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = () => {
    return (
        <ItemContainer>
            <h3>Coruja</h3>
            <p>Coruja-me</p>
            <a href="#">Abrir Repositório</a> <br />
            <a href="#" className="remove">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo