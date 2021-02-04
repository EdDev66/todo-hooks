import React, { useState } from 'react';
import './EditModal.css';

const EditModal = props => {
    const oldVal = props.textValue;
    const [inputVal, setInputVal] = useState(oldVal);
    const [currId, setCurrId] = useState(props.goalId);

    const inputChangeHandler = (e) => {
        setInputVal(e.target.value);
    }

    return (
        <div className={props.show ? "modal" : "hidden"}>
            <h4>Edit todo</h4>
            <input type="text" value={inputVal} onChange={(e) => inputChangeHandler(e)}/>
            <button className="modalButton" onClick={() => props.onConfirmChange(currId, inputVal)}>Confirm</button>
        </div>
    )
}

export default EditModal;
