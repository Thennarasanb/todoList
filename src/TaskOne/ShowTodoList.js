import React from 'react';

const DisplayList = (props) =>{
    return(
        <>
        <h6>List of Item</h6>
        <ul>
            {props.todo.map((task)=>
                <li>{task.task}</li>
                )}
        </ul>
        </>
    )
} 

export default DisplayList;