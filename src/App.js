import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { useEffect, useContext, useState } from "react";
import CategoryContext from "./components/store/category-context";

import ItemList from "./components/ItemListPage/ItemList";
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navigation/NavBar";
import CartProvider from "./components/store/CartProvider";
import PageLoad from "./components/Loader/PageLoad";
import LoadingContext from "./components/store/loading-context";
import SubPageLoad from "./components/Loader/SubPageLoad";

const App = () => {
  const categoryCtx = useContext(CategoryContext);
  const loadCtx = useContext(LoadingContext);
  const [mainIsLoading, setMainIsLoading] = useState(true);
  const [mainLoaded, setMainLoaded] = useState(false);
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navBodyAnimation, setNavBodyAnimation] = useState(``);

  useEffect(() => {
    categoryCtx.fetchCategories();
  }, []);

  // LOADING EFFECTS

  useEffect(() => {
    if (loadCtx.mainLoaded) {
      setTimeout(() => {
        setMainIsLoading(false);
        setTimeout(() => {
          setMainLoaded(true);
        }, 800);
      }, 500);
    }
  }, [loadCtx.mainLoaded]);

  /*
  // product loading
  useEffect(() => {
    if (loadCtx.productLoaded) {
      setTimeout(() => {
        setProductIsLoading(false);
      }, 250);
    }
  }, [loadCtx.productLoaded]);

  useEffect(() => {
    if (loadCtx.productIsLoading) {
      setProductIsLoading(true);
    }
  }, [loadCtx.productIsLoading]);
*/
  //

  return (
    <CartProvider>
      {/*mainIsLoading && <PageLoad />*/}
      {/*productIsLoading && <SubPageLoad />*/}

      <div className="App">
        {mainLoaded && <NavBar nav={setIsNavigating} />}
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
