import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Alert from "./components/Alert";
import CheckBox from "./components/CheckBox";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("mango");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [Filter, setFilter] = useState({
    label: [],
  });
  const APP_ID = "dfd9c3fe";
  const APP_KEY = "f9d1efbc2828ca287476f00ba7134958";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    if (search !== "") {
      const res = await Axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!res.data.more) {
        return setAlert("No recipe available with such name.. Try Again? ");
      }

      setRecipes(res.data.hits);
      setAlert("");
      setSearch("");
    } else {
      setAlert("Please fill the form!");
    }
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
    setSearch("");
  };

  const handleFilters = (filters, category) => {};
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />

      <div className="alertsize">{alert !== "" && <Alert alert={alert} />}</div>
      {/* <div className="alertsize">
        <Alert />
      </div> */}
      <div>
        <CheckBox
          handleFilters={(filters) => handleFilters(filters, "labels")}
        />
      </div>
      <div className="container" key={Math.random()}>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
