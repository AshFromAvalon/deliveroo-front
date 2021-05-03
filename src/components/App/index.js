import "./style.app.scss";
import { useState, useEffect } from "react";
import Header from "../Header";

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

  const { restaurant, category } = data;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Header
      name={restaurant.name}
      description={restaurant.description}
      cover={restaurant.picture}
    />
  );
}

export default App;
