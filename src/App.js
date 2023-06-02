import Checkbox from "./Checkbox";
import List from "./List";
import "./App.css";
function Time() {
  const date = new Date();
  const currentDat = date.getDay() - 1;
  const numberOfMonth = date.getDate();
  const daysTxt = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentHour = date.getHours();
  const currnetMins = date.getMinutes();
  function addTask(){

  }
  return (
    <div>
      <div className="backgroundImg">
        <h5 className="daytext">
          {daysTxt[currentDat]} {numberOfMonth}
        </h5>
        <h2 className="hours">
          {currentHour > 12 ? currentHour - 12 : currentHour}:
          {currnetMins < 10 ? "0" + currnetMins : currnetMins}{" "}
          {currentHour > 12 ? "PM" : "AM"}
        </h2>
      </div>
      <div className="list">
        <div className="inputContainer">
          <Checkbox bgColor="#EBEFF2" />
          <input className="inputField" placeholder="Note" />
          <button className="addButton">+</button>
        </div>
      </div>
      <div className="tasks">
        <List task="dinner" time="Today at 8:00 PM"  id="1"/>
        <List task="walk with khatia" time="Today at 8:00 PM" id="2" />
        <List task="join dinner with family" time="Today at 8:00 PM" id="3"/>
        <List task="coding challenges" time="Today at 8:00 PM" id="4" />
      </div>
    </div>
  );
}
export default Time;
