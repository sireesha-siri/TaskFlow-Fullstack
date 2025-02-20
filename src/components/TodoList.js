import React, { useState, useEffect } from "react";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../services/api";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // Fetch todos from database on load
    const getTodos = async () => {
        const todos = await fetchTodos();
        setTodos(todos);
    };

    useEffect(() => {
        getTodos();
    }, []);

    const handleAddTodo = async () => {
        if (newTodo.trim() === "") return;
        const newTask = await addTodo(newTodo);
        setTodos([...todos, newTask]);
        setNewTodo("");
    };

    const handleToggleTodo = async (id, currentStatus) => {
        await updateTodo(id, !currentStatus); 
        setTodos(todos.map(todo => (todo._id === id ? { ...todo, status: !currentStatus } : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div>
            <h1 className="todos-heading">TaskFlow</h1>
            <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Task</span>
            </h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="todo-user-input"
                placeholder="What needs to be done?"
            />
            <button onClick={handleAddTodo} className="button">Add</button>

            <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>

            <ul className="todo-items-container">
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
