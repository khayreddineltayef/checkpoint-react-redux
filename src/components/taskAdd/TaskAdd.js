import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adde, filt } from "../../reducer/actions";

const TaskAdd = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Math.random(), task: text, isDone: false };
    text.trim() === "" ? alert("please write a text") : dispatch(adde(newTask));
    setText("");
  };
  return (
    <div>
      <h1>TO DO APPLICATION</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write something here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            borderStyle: "1px solid gray",
            height: "50px",
            borderRadius: "5px",
            backgroundColor: "white",
            width: "82%",
          }}
        />
        <button
          style={{ borderRadius: "5px", height: "50px", width: "80px" }}
          type="submit"
        >
          add note
        </button>
      </form>
      <button onClick={() => dispatch(filt())}>filter</button>
    </div>
  );
};
export default TaskAdd;
