import React from "react";
import {InputContainer} from "./styles.js"
const Input = ({value, onChange}) => {
    return (
        <InputContainer value={value} onChange={onChange}/>
    )
}
export default Input