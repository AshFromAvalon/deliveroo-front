import "./style.app.scss";

import { useState, useEffect } from "react";

import Header from "../Header";
import Category from "../Category";
import Cart from "../Cart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

function App() {
  // Sates
  // API
  const [data, setData] = useState({});
  // Loading state for UseEffect
  const [isLoading, setisLoading] = useState(true);
  // Array for Cart component
  const [cartLines, setCartLines] = useState([]);

  // Fetch data
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

  // Fetch data on compoentn mount
  useEffect(() => {
    fetchData();
  }, []);

  // destructure data
  const { restaurant, categories } = data;

  // Icon component
  const iconSpinner = (
    <FontAwesomeIcon icon={faSpinner} className="loading-state--icon" spin />
  );

  return isLoading ? (
    // Loading state
    <div className="loading-state">
      {iconSpinner}
      <span className="loading-state--text">Loading...</span>
    </div>
  ) : (
    // Page when data is loaded
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
                    cartLines={cartLines}
                    setCartLines={setCartLines}
                  />
                );
              })}
          </div>
          <Cart cartLines={cartLines} />
        </div>
      </div>
    </div>
  );
}

export default App;
