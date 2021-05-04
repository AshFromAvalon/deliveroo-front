import "./style.counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ cartLines }) => {
  const iconPlus = (
    <FontAwesomeIcon icon={faPlus} className="counter-btn--icon" />
  );
  const iconMinus = (
    <FontAwesomeIcon icon={faMinus} className="counter-btn--icon" />
  );

  const handleClickPlus = () => {};
  const handleClickMinus = () => {};

  return (
    <div className="counter">
      <div className="counter-btn">{iconMinus}</div>
      <div className="counter-count">1</div>
      <div className="counter-btn">{iconPlus}</div>
    </div>
  );
};

export default Counter;
