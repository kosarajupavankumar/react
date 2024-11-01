// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    if(inputValue){
      setTasks(...tasksArr, inputValue);
    }
  };

  const handleDelete = (idx) => {
    // Complete the function
    setTasks(tasksArr.filter((task) => task != idx));
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
