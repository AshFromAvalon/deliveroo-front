import "./style.app.scss";
import { useState, useEffect } from "react";
import Header from "../Header";
import Category from "../Category";
import Cart from "../Cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

function App() {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://react-deliveroo-back.herokuapp.com/"
      );
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

  const iconSpinner = (
    <FontAwesomeIcon icon={faSpinner} className="loading-state--icon" spin />
  );

  return isLoading ? (
    <div className="loading-state">
      {iconSpinner}
      <span className="loading-state--text">Loading...</span>
    </div>
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
              .map((category, index) => {
                return (
                  <Category
                    key={index}
                    name={category.name}
                    meals={category.meals}
                  />
                );
              })}
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
