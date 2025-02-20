import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { updateTodo, deleteTodo } from "../services/api";

const TodoItem = ({ todo, onDelete, onToggle }) => {
    const handleToggle = async () => {
        await updateTodo(todo._id, !todo.status);
        onToggle(todo._id, todo.status);
    };

    const handleDelete = async () => {
        await deleteTodo(todo._id);
        onDelete(todo._id);
    };

    return (
        <li className="todo-item-container">
            <input 
                type="checkbox" 
                checked={todo.status} 
                onChange={handleToggle} 
                className="checkbox-input"
            />
            <div className="label-container">
                <label 
                    className={`checkbox-label ${todo.status ? "checked" : ""}`}
                >
                    {todo.title}
                </label>

                <div className="delete-icon-container">
                    <RiDeleteBin6Line onClick={handleDelete} className="delete-icon" size={20}/>
                </div>
            </div>
        </li>
    );
};

export default TodoItem;
