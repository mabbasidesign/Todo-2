import React, { Component } from 'react';

const Todos = (props) => {
    return ( 
        <div className='container'>
            {props.todos.map(t => {
                return(
                    <ul key={t.id}>
                        <li>{t.content}</li>
                        <button onClick={() => props.onDelete(t.id)} >Delete</button>
                    </ul>
                )
            })}
        </div>
     );
}

export default Todos;