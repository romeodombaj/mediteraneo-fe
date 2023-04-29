import "./App.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { useEffect, useContext, useState } from "react";
import CategoryContext from "./components/store/category-context";

import ItemList from "./components/ItemListPage/ItemList";
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navigation/NavBar";
import CartProvider from "./components/store/CartProvider";
import PageLoad from "./components/Loader/PageLoad";

const App = () => {
  const categoryCtx = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navBodyAnimation, setNavBodyAnimation] = useState(``);

  useEffect(() => {
    categoryCtx.fetchCategories();

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    console.log(isNavigating);
    if (isNavigating) {
      setNavBodyAnimation(`nav-active`);
    } else {
      setNavBodyAnimation(``);
    }
  }, [isNavigating]);

  return (
    <CartProvider>
      {isLoading && <PageLoad />}

      <div className="App">
        <NavBar nav={setIsNavigating} />
        <div className={`${styles[`nav-state`]} ${styles[navBodyAnimation]}`}>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/:categoryID" element={<ItemList />} />
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
