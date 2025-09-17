import { useState } from "react"

// TaskForm: Handles adding a new task
export default function TaskForm({ addTask }) {
  // Local state to store current input field value
  const [value, setValue] = useState("")

  // Handle form submit (triggered when user clicks "Add")
  const handleSubmit = (e) => {
    e.preventDefault() // prevent page reload

    console.log("the state value :", value) // debugging (can remove later)

    if (value.trim()) {
      // Create a new task object with unique id + default completed:false
      const taskInfo = { id: Date.now(), value, completed: false }

      // Send task back to parent (App component) to update task list
      addTask(taskInfo)
    }

    // Reset input field after submission
    setValue("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Input field for entering task */}
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="enter task"
          name="task"
        />

        {/* Submit button */}
        <button className="sub-btn">ADD</button>
      </form>
    </>
  )
}
