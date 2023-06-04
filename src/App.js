import React, { useState } from "react";
import Checkbox from "./Checkbox";
import List from "./List";
import "./App.css";
const date = new Date();
const currentDat = date.getDay();
const numberOfMonth = date.getDate();
const daysTxt = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentHour = date.getHours();
const currnetMins = date.getMinutes();

function Time() {
  const [tasks, setTasks] = useState([
    { task: "dinner", time: "Today at 11:00 AM", id: "1" },
    { task: "walk with khatia", time: "Today at 12:00 AM", id: "2" },
    { task: "join dinner with family", time: "Today at 3:00 PM", id: "3" },
    { task: "coding challenges", time: "Today at 7:00 PM", id: "4" },
  ]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    let current_time = null;
    if (currentHour > 12) {
      current_time = `${currentHour - 12}:${currnetMins}`;
      if (currnetMins < 10) {
        current_time = `${currentHour - 12}:0${currnetMins}`;
      }
    } else {
      current_time = `${currentHour}:${currnetMins}`;
      if (currnetMins < 10) {
        current_time = `${currentHour}:0${currnetMins}`;
      }
    }
    if (currentHour > 12) {
      current_time += " PM";
    } else {
      current_time += " AM";
    }
    current_time = `Today at ${current_time}`;

    const newTask = {
      task: taskInput,
      time: current_time,
      id: String(tasks.length + 1),
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  return (
    <div>
      <div className="backgroundImg">
        <h6 className="daytext">
          {daysTxt[currentDat]} {numberOfMonth}
        </h6>
        <h2 className="hours">
          {currentHour > 12 ? currentHour - 12 : currentHour}:
          {currnetMins < 10 ? "0" + currnetMins : currnetMins}{" "}
          {currentHour > 12 ? "PM" : "AM"}
        </h2>
      </div>
      <div className="list">
        <div className="inputContainer">
          <Checkbox bgColor="#EBEFF2" name="main" />
          <input
            className="inputField"
            placeholder="Note"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="addButton" onClick={addTask}>
            +
          </button>
        </div>
      </div>
      <ul className="tasks" id="todolist">
        {tasks.map((task) => (
          <List
            key={task.id}
            task={task.task}
            time={task.time}
            id={task.id}
            checked={task.done}
          />
        ))}
      </ul>
    </div>
  );
}
export default Time;
