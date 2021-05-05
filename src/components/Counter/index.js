import "./style.counter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ cart, setCart, meal }) => {
  const iconPlus = (
    <FontAwesomeIcon icon={faPlus} className="counter-btn--icon" />
  );
  const iconMinus = (
    <FontAwesomeIcon icon={faMinus} className="counter-btn--icon" />
  );

  const handleClickPlus = () => {
    const newCart = [...cart];
    meal.quantity++;
    setCart(newCart);
  };

  const handleClickMinus = () => {
    const newCart = [...cart];
    if (meal.quantity === 1) {
      newCart.splice(newCart.indexOf(meal), 1);
    } else {
      meal.quantity--;
    }
    setCart(newCart);
  };

  return (
    <div className="counter">
      <div className="counter-btn" onClick={handleClickMinus}>
        {iconMinus}
      </div>
      <div className="counter-count">{meal.quantity}</div>
      <div className="counter-btn" onClick={handleClickPlus}>
        {iconPlus}
      </div>
    </div>
  );
};

export default Counter;
