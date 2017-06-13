import React from 'react';
const Button = (props) => (
    <button className={props.color} onClick={props.clickFunc}>{props.title}</button>
);

export default Button;