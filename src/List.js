import Checkbox from "./Checkbox";
import TrashIco from "./akar-icons_trash-can.png";
import { useState } from "react";
import "./list.css";

function List(props) {
  const [task, setTask] = useState(0);
  function deleteTask() {
    const element = document.getElementById(props.id);
    element.parentNode.removeChild(element);
  }
  return (
    <div className="listCont">
      <div className="taskAndTime">
        <h3 className="taskName">{props.task}</h3>
        <p className="taskTime">{props.time}</p>
      </div>
      <div className="icons">
        <Checkbox bgColor="transparent" />
        <button className="deleteBTN" onClick={deleteTask}>
          <img src={TrashIco} alt="deleteicon" />
        </button>
      </div>
    </div>
  );
}
export default List;
