import "./style.meal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Meal = ({ meal, cart, setCart }) => {
  const iconStar = (
    <FontAwesomeIcon icon={faStar} className="meal-card-popular-icon" />
  );

  // Chek if a meal is already in the cart before adding it
  const exist = (meal) => {
    return cart.find((item) => meal.id === item.id);
  };

  // Add a meal to the cart
  const addToCart = (meal) => {
    const newCart = [...cart];

    if (exist(meal)) {
      const mealToUpdate = newCart.find((item) => item.id === meal.id);
      mealToUpdate.quantity++;
    } else {
      newCart.push({ ...meal, quantity: 1 });
    }

    setCart(newCart);
  };

  return (
    <div className="meal-card" onClick={() => addToCart(meal)}>
      <div className="meal-card-content">
        <h3 className="meal-card-title">{meal.title}</h3>
        <p className="meal-card-description">{meal.description}</p>
        <div className="meal-card-infos">
          <span className="meal-card-price">
            {meal.price.replace(".", ",")} €
          </span>
          {meal.popular && (
            <span className="meal-card-popular">{iconStar}meal.popular</span>
          )}
        </div>
      </div>
      {meal.picture && (
        <img className="meal-card-pic" src={meal.picture} alt="" />
      )}
    </div>
  );
};

export default Meal;
