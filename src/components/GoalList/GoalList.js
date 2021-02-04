import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { FaTimesCircle, FaEdit, FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';
import './GoalList.css';
import Modal from '../EditModal/EditModal';
import Backdrop from '../Backdrop/Backdrop';

const GoalList = props => {

    const [showModal, setShowModal] = useState(false);
    const[todoText, setTodoText] = useState('');
    const [currentId, setCurrentId] = useState('');

    const openModal = (id, text) => {
      console.log(text);
      setTodoText(text);
      setCurrentId(id);
      setShowModal(!showModal);
  }

    const [goals, setGoals] = useState([]);

    const addGoal = (goal) => {
      setGoals(goals.concat(goal));
    }

    const removeTodo = (id) => {
        setGoals(goals.filter((goalInArray) => {
            return id !== goalInArray.id;
        }))
    }

    const updateTodo = (id, newText) => {
       const newGoals = goals.map((goal) => {
        if(goal.id === id){
            return {
                ...goal, text: newText
            }
        }
        return goal;
       })
       setGoals(newGoals);
       setShowModal(!showModal);
    }

    const markComplete = (id) => {
        const updatedGoals = goals.map((goal) => {
            if(goal.id == id) {
                return {
                    ...goal, isComplete: !goal.isComplete
                }
            }
            return goal;
        })
        setGoals(updatedGoals);
        console.log(updatedGoals);

    }

    return (
        <div>
             <Backdrop show={showModal} onBackdropDismiss={openModal}/>
            {showModal ? <Modal show={showModal} goalId={currentId} onConfirmChange={updateTodo} textValue={todoText}/> : null}
            <TodoForm onAddGoal={addGoal}/>
               {goals.map((goal) => {
                 return (
                    <div 
                        className={goal.isComplete ? 'todo-row complete' : 'todo-row'} 
                        key={goal.id}>
                        <p className={goal.isComplete ? "todo-text complete" : "todo-text"}>{goal.text}</p>
                        <div className="icons">
                         {goal.isComplete ? <FaRegCheckSquare onClick={() => markComplete(goal.id)}/> : <FaRegSquare onClick={() => markComplete(goal.id)}/>} 
                         <FaEdit onClick={() => openModal(goal.id, goal.text)}/>
                         <FaTimesCircle onClick={() => removeTodo(goal.id)}/>
                        </div>
                    </div>
                    )
               })}
        </div>
    )
}

export default GoalList;