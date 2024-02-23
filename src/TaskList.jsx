import { useState } from "react";
import { tasks as data } from "./tasks";
import { useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  if (data.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
