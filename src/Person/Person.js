import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am from the person component {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
    };


export default person;