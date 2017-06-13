import React from 'react';
const Form = (props) => (
    <form onSubmit={props.next} name={props.name}>
        {props.children}
    </form>
);

export default Form;