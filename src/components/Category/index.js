import "./style.category.scss";
import Meal from "../Meal/index";

const Category = ({ name, meals, cart, setCart }) => {
  return (
    <div className="category">
      <h2 className="category-title">{name}</h2>
      <div className="menu-item">
        {meals.map((meal) => {
          return (
            <Meal key={meal.id} cart={cart} setCart={setCart} meal={meal} />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
