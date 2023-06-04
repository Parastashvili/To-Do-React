import Checkbox from "./Checkbox";
import TrashIco from "./akar-icons_trash-can.png";
import "./list.css";

function List(props) {
  function deleteTask() {
    const element = document.getElementById(props.id);
    element.parentNode.removeChild(element);
  }
  return (
    <li className="listCont" id={props.id}>
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
    </li>
  );
}
export default List;
