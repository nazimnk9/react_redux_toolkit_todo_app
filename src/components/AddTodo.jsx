import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import "./addtodo.css"

const AddTodo = () => {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return (
        <div className="inquiry__form">
            <h4 className="inquiry__form-h4">Todo</h4>
            <p className="inquiry__form-p">Todo app</p>
            <form onSubmit={addTodoHandler} className="inquiry__form-form">
                <input className="inquiry__form-input" type="text" placeholder="Enter todo" value={input}
                onChange={(e) => setInput(e.target.value)} />
                <button type='submit' className="inquiry__form-button">Add todo</button>
            </form>
        </div>
    )
}

export default AddTodo