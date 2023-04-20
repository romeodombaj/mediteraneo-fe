import "./App.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { useEffect, useContext } from "react";
import CategoryContext from "./components/store/category-context";

import ItemList from "./components/ItemListPage/ItemList";
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navigation/NavBar";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  const categoryCtx = useContext(CategoryContext);

  useEffect(() => {
    categoryCtx.fetchCategories();
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/:categoryID" element={<ItemList />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
