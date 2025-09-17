import { useState } from 'react'
import './App.css'
import TaskForm from './Taskform'
import TaskList from './Tasklist'

function App() {
  {
    // State to store all tasks (each task will be an object with id, text, completed status)
    const [task, setTask] = useState([])

    // Add a new task (called from TaskForm)
    const addTask = (text) => {
      setTask((preVal) => {
        return [...preVal, text] // append new task to existing list
      })
    }

    // Toggle task completion (called when a checkbox/tick is clicked)
    const toggleList = (id) => {
      setTask(
        task.map((tk) => {
          return tk.id === id ? { ...tk, completed: !tk.completed } : tk
        })
      )
    }

    // Delete a task by filtering it out from the array
    const deleteList = (id) => {
      const filteredTask = task.filter((tk) => {
        return tk.id !== id
      })
      setTask(filteredTask)
    }

    return (
      <div>
        {/* Page Heading */}
        <h1>Task Manager</h1>

        {/* Show total number of tasks */}
        <h3>Task Count: {task.length}</h3>

        {/* Task input form (child component) */}
        <TaskForm addTask={addTask} />

        {/* Task list display (child component) */}
        <TaskList
          tasks={task}
          ToggleList={toggleList}
          DeleteList={deleteList}
        />
      </div>
    )
  }
}

export default App
