import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { useEffect, useContext, useState } from "react";
import CategoryContext from "./components/store/category-context";

import ItemList from "./components/ItemListPage/ItemList";
import FrontPage from "./components/FrontPage/FrontPage";
import NavBar from "./components/Navigation/NavBar";
import CartProvider from "./components/store/CartProvider";
import AboustUs from "./components/Informative-Pages/AboutUs";
import Footer from "./components/Informative-Pages/Footer";
import Item from "./components/ItemListPage/FocusItem/Item";
import Footer2 from "./components/Informative-Pages/Footer2";
import OurStory from "./components/Informative-Pages/OurStory";

const App = () => {
  const categoryCtx = useContext(CategoryContext);

  useEffect(() => {
    categoryCtx.fetchCategories();
  }, []);

  return (
    <CartProvider>
      <div>
        <NavBar />
        <div className={`${styles[`nav-state`]}`}>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/aboutus" element={<AboustUs />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/search/:searchTerm" element={<ItemList />} />
            <Route path="/:categorySlug" element={<ItemList />}>
              <Route path=":productSlug" element={<Item />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer2 />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
