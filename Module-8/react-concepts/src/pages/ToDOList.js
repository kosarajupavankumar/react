import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (!isLoggedIn) {
    return <h1>You are not allowed to access this page</h1>;
  }

  const onInputChange = (event) => {
    setTask(event.target.value);
  };

  const onButtonClick = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input type="text" value={task} onChange={onInputChange} />
          <button onClick={onButtonClick}>Add Task</button>
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
