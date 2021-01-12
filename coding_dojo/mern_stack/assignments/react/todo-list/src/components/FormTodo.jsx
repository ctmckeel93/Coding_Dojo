import React, { useState, useEffect } from 'react'

const FormTodo = props => {
    const [newTask, setNewTask] = useState({
        index: "",
        content: "",
        checked: false
    })
    const taskHandler = (e) => {
        setNewTask({...newTask, [e.target.name]:e.target.value })
        
    }

    const createTodo = (e) => {
        e.preventDefault();
        props.newItem(newTask)
        setNewTask({
            content: "",
            checked: false
        })
    
    }
    return (
        <form onSubmit={ createTodo} >
            <div className="form-group">
                <label htmlFor="newTask">Add a task</label>
                <input className="form-group row" name="content" type="text" onChange={ taskHandler} value={newTask.content} id=""/>
                <input className="btn-primary" type="submit"/>
            </div>
        </form>
    )
}

export default FormTodo