// TaskList: Renders the list of tasks with toggle & delete options
export default function TaskList(props) {
  return (
    <>
      <ul>
        {props.tasks.map((elm) => {
          return (
            <li key={elm.id}>
              {/* Task text (click to toggle completed status) */}
              <span
                onClick={() => props.ToggleList(elm.id)}
                className={elm.completed ? "completed" : ""}
              >
                {elm.value}
              </span>

              {/* Delete button (click to remove task) */}
              <span onClick={() => props.DeleteList(elm.id)}>❌</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
