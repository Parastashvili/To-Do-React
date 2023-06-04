import "./checkbox.css";
function Checkbox(props) {
  return (
    <div className="checkboxCont" style={{ backgroundColor: props.bgColor }}>
      <label class="checkbox bounce">
        <input type="checkbox" className={props.name} />
        <svg viewBox="0 0 21 21">
          <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
        </svg>
      </label>
    </div>
  );
}
export default Checkbox;
