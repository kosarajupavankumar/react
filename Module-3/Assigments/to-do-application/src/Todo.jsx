// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);

  // add the task for the function
  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasksArr, task]);
    }
  };

  const handleDelete = (idx) => {
    // Complete the function
    setTasks(tasksArr.filter((task, index) => index !== idx));
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;
