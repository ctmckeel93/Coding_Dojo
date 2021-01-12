    import React from "react";

    const Todos = (props) => {
    const { todos, setTodos } = props;
    const completeHandler = (e) => {
    const newList = [...todos];

    var todo = newList[e.target.id];
    todo = {
        index: todo.index,
        content: todo.content,
        checked: !todo.checked,
    };
    newList[e.target.id] = todo;

    props.isChecked(newList);
    };

    const removeTask = (indexToDelete) => {
    var newList = todos.filter((item, i) => {
        if (i !== indexToDelete) {
        return item;
        }
    });
    setTodos(newList);
    };

    return (
    <ul>
        {todos.map((item, i) => {
        return (
            <li key={i} className={item.checked ? "checked" : ""}>
            <input onChange={completeHandler} type="checkbox" name="" />
            {item.content}{" "}
            <button onClick={() => removeTask(i)} className="btn btn-danger">
                Delete
            </button>
            </li>
        );
        })}
    </ul>
    );
    };

    export default Todos;
