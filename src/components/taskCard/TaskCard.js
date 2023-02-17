import React from "react";
import { useDispatch } from "react-redux";
import { comp, del } from "../../reducer/actions";
import TaskEdit from "../taskEdit/TaskEdit";

const TaskCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="task" style={{ width: "96%" }}>
      <h1
        style={{
          width: "300px",
          border: "1px solid black",
          borderRadius: "10px",
          fontSize: "16px",
          textAlign: "start",
          wordWrap: "break-word",
        }}
        id={todo.isDone ? "completed" : "incompleted"}
      >
        {todo.task}
      </h1>
      <button
        style={{ width: "50px", height: "40px", borderRadius: "5px" }}
        onClick={() => dispatch(del(todo.id))}
      >
        Delete
      </button>
      <button
        style={{ width: "65px", height: "40px", borderRadius: "5px" }}
        onClick={() => dispatch(comp(todo.id))}
      >
        {todo.isDone ? "Undo" : "Complete"}
      </button>
      <TaskEdit todos={todo} />
    </div>
  );
};

export default TaskCard;
