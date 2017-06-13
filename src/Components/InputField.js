import React from 'react';
const InputField = (props) => (
    <div className={props.column + " form-group"}>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className={props.inputClass + " form-control"}
         name={props.name} 
         onChange={props.change}
        required={props.required} />
    </div>
);


export default InputField;
