import "./style.category.scss";
import Meal from "../Meal/index";

const Category = ({ name, meals, cartLines, setCartLines }) => {
  return (
    <div className="category">
      <h2 className="category-title">{name}</h2>
      <div className="menu-item">
        {meals.map((meal) => {
          return (
            <Meal
              key={meal.id}
              cartLines={cartLines}
              setCartLines={setCartLines}
              {...meal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
