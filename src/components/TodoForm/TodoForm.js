import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = props => {
    const [textValue, setTextValue] = useState('');
  

    const submitHandler = (e) => {
        e.preventDefault();
        
            const newGoal = {
                id: Math.floor(Math.random()*10000),
                text: textValue,
                isComplete: false
            }
    
            setTextValue('');
            props.onAddGoal(newGoal);
        
    }

    const inputHandler = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input className="todo-input" type="text" value={textValue} onChange={inputHandler} required/>
            <button className="todo-button">Add todo</button>
        </form>
    )
}

export default TodoForm;