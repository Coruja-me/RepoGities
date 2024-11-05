import React from "react";
import {ButtonContainer} from "./styles.js"
const Button = ({onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>BUSCAR</ButtonContainer>
    )
}
export default Button