import { useState } from "react";

type Task = {
  title: string;
  remarks: string;
  date: string; // Assuming date is represented as a string
};

export function UpdateObjectArray() {
  const [task, setTask] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskRemarks, setTaskRemarks] = useState("");
  const [taskDate, setTaskDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const handleAddTask = () => {
    const newTask: Task = {
      title: taskTitle,
      remarks: taskRemarks,
      date: taskDate,
    };

    setTask((prevTask) => [...prevTask, newTask]);

    setTaskDate(new Date().toISOString().slice(0, 10));
    setTaskTitle("");
    setTaskRemarks("");
  };

  const handleRemoveTask = (index: number) => {
    setTask(task.filter((_, i) => i !== index));
  };

  const handleTaskTitile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleTaskRemarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskRemarks(event.target.value);
  };

  const handleTaskDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDate(event.target.value);
  };

  return (
    <>
      <div>
        <h2>⚔️ Quest:</h2>
        <ul>
          {task.map((task, index) => (
            <li key={index} onClick={() => handleRemoveTask(index)}>
              {task.date} {task.title} {task.remarks}
            </li>
          ))}
        </ul>
        <input type="date" value={taskDate} onChange={handleTaskDate} />
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitile}
          placeholder="update Quest here"
        />
        <input
          type="text"
          value={taskRemarks}
          onChange={handleTaskRemarks}
          placeholder="update Notes here"
        />
        <button onClick={handleAddTask}>Add Now</button>
      </div>
    </>
  );
}
