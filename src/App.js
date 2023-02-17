import React from "react";

import "./App.css";
import TaskAdd from "./components/taskAdd/TaskAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/taskList/TaskList";

const App = () => {
  return (
    <div className="App">
      <div
        style={{
          border: "2px solid black",
          width: "500px",
          marginLeft: "550px",
          marginTop: "20px",
        }}
      >
        <TaskAdd />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
