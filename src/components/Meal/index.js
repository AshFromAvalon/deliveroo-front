import "./style.meal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Meal = ({
  id,
  title,
  description,
  price,
  picture,
  popular,
  cartLines,
  setCartLines,
}) => {
  const iconStar = (
    <FontAwesomeIcon icon={faStar} className="meal-card-popular-icon" />
  );

  // Chek if a meal is already in the cart before adding it
  const isInCart = (meal) => {
    return cartLines.some((item) => meal.id === item.id);
  };

  // Add a meal to the cart
  const handleClick = (line) => {
    if (!isInCart(line)) {
      const newLines = [...cartLines];
      newLines.push(line);
      setCartLines(newLines);
    }
  };

  return (
    <div
      className="meal-card"
      onClick={() => handleClick({ id, title, price })}
    >
      <div className="meal-card-content">
        <h3 className="meal-card-title">{title}</h3>
        <p className="meal-card-description">{description}</p>
        <div className="meal-card-infos">
          <span className="meal-card-price">{price.replace(".", ",")} €</span>
          {popular && (
            <span className="meal-card-popular">{iconStar}popular</span>
          )}
        </div>
      </div>
      {picture && <img className="meal-card-pic" src={picture} alt="" />}
    </div>
  );
};

export default Meal;
