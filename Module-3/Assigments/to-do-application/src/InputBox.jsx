import React, { useState } from "react";

function InputBox(props) {
  const [val, setVal] = useState("");
  const handleInput = (e) => {
    // Add code here
    setVal(e.target.value);
  };
  const addTaskChild = () => {
    // Add code here
    props.addTask(val);
    setVal("");
  };
  return (
    <div className="inputbox">
      <input type="text" value={val} onChange={handleInput}/>
      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;