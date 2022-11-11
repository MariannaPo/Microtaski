import React from "react";

type ButtonPropsType = {
    name: string,
    callback: () => void,
}



const Button = (props:ButtonPropsType) => {
    let onclickButtonHandler = () => {
    props.callback()
}
    return (
        <button onClick={onclickButtonHandler}>{props.name}</button>
    )
}
export default Button;