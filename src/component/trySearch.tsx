import { useState } from "react";

type Task = {
  title: string;
  // Assuming date is represented as a string
};

export default function TrySearch() {
  const [task, setTask] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTaskTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      return; // Don't add task if title or remarks are empty
    }

    const newTask: Task = {
      title: taskTitle,
    };

    setTask((prevTask) => [...prevTask, newTask]);
    setTaskTitle("");
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter tasks based on the search query
  const filteredTasks = task.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitle}
          placeholder="update Quest here"
        />
        <button onClick={handleAddTask}>Add Quest</button>
      </div>
    </>
  );
}
