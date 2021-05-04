import "./style.counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ cartLines, setCartLines, line }) => {
  const iconPlus = (
    <FontAwesomeIcon icon={faPlus} className="counter-btn--icon" />
  );
  const iconMinus = (
    <FontAwesomeIcon icon={faMinus} className="counter-btn--icon" />
  );

  const handleClickPlus = () => {
    line.quantity += 1;
    const newLines = [...cartLines];
    newLines.push(line);
    setCartLines(newLines);
  };

  const handleClickMinus = () => {
    line.quantity -= 1;
    const newLines = [...cartLines];
    const lineToRemove = newLines.find((item) => item === line);
    newLines.splice(newLines.indexOf(lineToRemove), 1);
    setCartLines(newLines);
  };

  return (
    <div className="counter">
      <div className="counter-btn" onClick={handleClickMinus}>
        {iconMinus}
      </div>
      <div className="counter-count">{line.quantity}</div>
      <div className="counter-btn" onClick={handleClickPlus}>
        {iconPlus}
      </div>
    </div>
  );
};

export default Counter;
