import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../taskCard/TaskCard";

const TaskList = () => {
  const { todosList, filter } = useSelector((state) => state);
  return (
    <div>
      {filter
        ? todosList
            .filter((el) => el.isDone === false)
            .map((el) => <TaskCard key={el.id} todo={el} />)
        : todosList.map((el) => <TaskCard key={el.id} todo={el} />)}
    </div>
  );
};

export default TaskList;
