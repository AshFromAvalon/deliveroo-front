import "./style.app.scss";
import { useState, useEffect } from "react";
import Header from "../Header";
import Category from "../Category";
import Cart from "../Cart";

const axios = require("axios");

function App() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3200/");
      setData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error.messsage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { restaurant, categories } = data;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Header
        name={restaurant.name}
        description={restaurant.description}
        cover={restaurant.picture}
      />
      <div className="content">
        <div className="content-center">
          <div className="menu">
            {categories
              .filter((category) => category.meals.length >= 1)
              .map((category) => {
                return <Category name={category.name} meals={category.meals} />;
              })}
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
