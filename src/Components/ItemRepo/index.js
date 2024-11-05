import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({repo, handleRemoveRepo}) => {
    const handleRemove = (e) => {
        e.preventDefault()
        handleRemoveRepo(repo.id)
    }

    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">Abrir Repositório</a> <br />
            <a href="#" className="remove" rel="noreferrer" onClick={handleRemove}>Remover Repositório</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo