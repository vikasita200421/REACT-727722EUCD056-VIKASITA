import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([...tasks, { text: newTask, isCompleted: false }]);
        setNewTask("");
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    };

    const getFilteredTasks = () => {
        if (filter === "completed") return tasks.filter(task => task.isCompleted);
        if (filter === "incomplete") return tasks.filter(task => !task.isCompleted);
        return tasks;
    };

    return (
        <div>
            <form onSubmit={addTask}>
                <input 
                    type="text" 
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("incomplete")}>Incomplete</button>
            </div>
            <ul>
                {getFilteredTasks().map((task, index) => (
                    <li key={index} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => toggleTaskCompletion(index)}>
                            {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
